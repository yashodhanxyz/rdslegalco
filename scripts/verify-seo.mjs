#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const htmlFiles = fs
  .readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .sort();

const errors = [];
const warnings = [];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function has(content, regex) {
  return regex.test(content);
}

function capture(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

for (const file of htmlFiles) {
  const content = read(file);

  if (!has(content, /<html[^>]*\blang="/i)) {
    errors.push(`${file}: missing <html lang=\"...\">.`);
  }

  const title = capture(content, /<title>([^<]+)<\/title>/i);
  if (!title) {
    errors.push(`${file}: missing <title>.`);
  } else if (title.length < 20 || title.length > 70) {
    warnings.push(`${file}: title length is ${title.length} chars (recommended ~20-70).`);
  }

  const description = capture(content, /<meta\s+name="description"\s+content="([^"]*)"/i);
  if (file !== "404.html" && !description) {
    errors.push(`${file}: missing meta description.`);
  } else if (description && (description.length < 70 || description.length > 180)) {
    warnings.push(`${file}: description length is ${description.length} chars (recommended ~70-180).`);
  }

  const h1Matches = content.match(/<h1\b/gi) || [];
  if (file !== "404.html" && h1Matches.length < 1) {
    errors.push(`${file}: missing <h1> in source HTML.`);
  } else if (h1Matches.length > 1) {
    warnings.push(`${file}: multiple <h1> tags found (${h1Matches.length}).`);
  }

  const robots = capture(content, /<meta\s+name="robots"\s+content="([^"]*)"/i).toLowerCase();
  if (!robots) {
    errors.push(`${file}: missing robots meta.`);
  }

  const isNoindex = robots.includes("noindex");
  const canonical = capture(content, /<link\s+rel="canonical"\s+href="([^"]+)"/i);

  if (!isNoindex && file !== "404.html") {
    if (!canonical) {
      errors.push(`${file}: missing canonical URL.`);
    } else if (!canonical.startsWith("https://www.rds.legal/")) {
      errors.push(`${file}: canonical should be absolute under https://www.rds.legal/.`);
    }
  }

  if (!isNoindex && file !== "404.html") {
    const requiredSocial = [
      [/meta\s+property="og:type"/i, "og:type"],
      [/meta\s+property="og:title"/i, "og:title"],
      [/meta\s+property="og:description"/i, "og:description"],
      [/meta\s+property="og:url"/i, "og:url"],
      [/meta\s+name="twitter:card"/i, "twitter:card"],
      [/meta\s+name="twitter:title"/i, "twitter:title"],
      [/meta\s+name="twitter:description"/i, "twitter:description"]
    ];

    for (const [regex, label] of requiredSocial) {
      if (!has(content, regex)) {
        errors.push(`${file}: missing ${label} meta.`);
      }
    }
  }

  if (!has(content, /<script\s+type="application\/ld\+json">/i)) {
    warnings.push(`${file}: missing JSON-LD schema block.`);
  }
}

const robotsTxtPath = path.join(root, "robots.txt");
if (fs.existsSync(robotsTxtPath)) {
  const robotsTxt = fs.readFileSync(robotsTxtPath, "utf8");
  if (!/Sitemap:\s*https:\/\/www\.rds\.legal\/sitemap\.xml/i.test(robotsTxt)) {
    errors.push("robots.txt: missing or mismatched sitemap URL.");
  }
}

const sitemapPath = path.join(root, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const locRegex = /<loc>\s*([^<]+)\s*<\/loc>/gi;
  const urls = new Set();
  let match;
  while ((match = locRegex.exec(sitemap))) {
    urls.add(match[1].trim());
  }

  for (const file of htmlFiles) {
    const content = read(file);
    const robots = capture(content, /<meta\s+name="robots"\s+content="([^"]*)"/i).toLowerCase();
    if (file === "404.html" || robots.includes("noindex")) continue;
    const expectedUrl = file === "index.html" ? "https://www.rds.legal/" : `https://www.rds.legal/${file}`;
    if (!urls.has(expectedUrl)) {
      errors.push(`sitemap.xml: missing indexable page URL ${expectedUrl}.`);
    }
  }
}

if (!errors.length && !warnings.length) {
  console.log("PASS: SEO checks passed for all pages.");
  process.exit(0);
}

if (warnings.length) {
  console.log("WARNINGS:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
}

if (errors.length) {
  console.error("ERRORS:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("PASS: SEO checks passed with warnings.");
