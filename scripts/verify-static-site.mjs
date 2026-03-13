#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const errors = [];
const warnings = [];

function exists(relPath) {
  return fs.existsSync(path.join(root, relPath));
}

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

const requiredFiles = [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "js/site.js",
  "css/global.css",
  "css/components.css",
  "css/animations.css"
];

for (const file of requiredFiles) {
  if (!exists(file)) addError(`Missing required file: ${file}`);
}

if (exists("js/site.js")) {
  const syntaxCheck = spawnSync("node", ["--check", "js/site.js"], {
    cwd: root,
    encoding: "utf8"
  });
  if (syntaxCheck.status !== 0) {
    addError(`JavaScript syntax check failed for js/site.js:\n${syntaxCheck.stderr || syntaxCheck.stdout}`);
  }
}

const htmlFiles = fs
  .readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .sort();

const htmlContent = new Map();
const idsByFile = new Map();

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(root, file), "utf8");
  htmlContent.set(file, content);

  const ids = new Set();
  const idRegex = /\sid\s*=\s*"([^"]+)"/gi;
  let match;
  while ((match = idRegex.exec(content))) {
    ids.add(match[1]);
  }
  idsByFile.set(file, ids);
}

function isExternalRef(ref) {
  return (
    ref.startsWith("http://") ||
    ref.startsWith("https://") ||
    ref.startsWith("mailto:") ||
    ref.startsWith("tel:") ||
    ref.startsWith("data:") ||
    ref.startsWith("javascript:")
  );
}

for (const file of htmlFiles) {
  const content = htmlContent.get(file) || "";
  const linkRegex = /\b(?:href|src)\s*=\s*"([^"]+)"/gi;
  let match;

  while ((match = linkRegex.exec(content))) {
    const ref = match[1].trim();
    if (!ref || isExternalRef(ref)) continue;

    if (ref.startsWith("#")) {
      const anchor = decodeURIComponent(ref.slice(1));
      if (anchor && !idsByFile.get(file)?.has(anchor)) {
        addError(`${file}: in-page anchor "${ref}" does not exist.`);
      }
      continue;
    }

    const [filePart, hash] = ref.split("#");
    if (!filePart) continue;
    if (!exists(filePart)) {
      addError(`${file}: missing local reference "${ref}".`);
      continue;
    }

    if (hash && filePart.endsWith(".html")) {
      const anchor = decodeURIComponent(hash);
      if (anchor && !idsByFile.get(filePart)?.has(anchor)) {
        addError(`${file}: target anchor "${ref}" does not exist.`);
      }
    }
  }

  const srcsetRegex = /\bsrcset\s*=\s*"([^"]+)"/gi;
  while ((match = srcsetRegex.exec(content))) {
    const refs = match[1]
      .split(",")
      .map((part) => part.trim().split(/\s+/)[0])
      .filter(Boolean);
    for (const ref of refs) {
      if (isExternalRef(ref)) continue;
      if (!exists(ref)) {
        addError(`${file}: missing srcset reference "${ref}".`);
      }
    }
  }
}

for (const file of htmlFiles) {
  const content = htmlContent.get(file) || "";
  const hasNoindex = /<meta\s+name="robots"\s+content="[^"]*\bnoindex\b/i.test(content);
  const hasCanonical = /<link\s+rel="canonical"\s+href="[^"]+"/i.test(content);
  if (!hasNoindex && !hasCanonical) {
    addWarning(`${file}: missing canonical link tag.`);
  }
}

if (exists("sitemap.xml")) {
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const locRegex = /<loc>\s*([^<]+)\s*<\/loc>/gi;
  const listed = new Set();
  let match;
  while ((match = locRegex.exec(sitemap))) {
    listed.add(match[1].trim());
  }

  for (const file of htmlFiles) {
    const content = htmlContent.get(file) || "";
    const hasNoindex = /<meta\s+name="robots"\s+content="[^"]*\bnoindex\b/i.test(content);
    if (hasNoindex || file === "404.html") continue;
    const expected = file === "index.html" ? "https://www.rds.legal/" : `https://www.rds.legal/${file}`;
    if (!listed.has(expected)) {
      addWarning(`sitemap.xml: missing URL for ${file} (${expected}).`);
    }
  }
}

if (exists("robots.txt")) {
  const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
  if (!/Sitemap:\s*https:\/\/www\.rds\.legal\/sitemap\.xml/i.test(robots)) {
    addWarning("robots.txt: sitemap URL is missing or mismatched.");
  }
}

if (!errors.length && !warnings.length) {
  console.log("PASS: Static deployment checks passed.");
  process.exit(0);
}

if (warnings.length) {
  console.log("WARNINGS:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length) {
  console.error("ERRORS:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("PASS: Static deployment checks passed with warnings.");
