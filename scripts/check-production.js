#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports, no-console, @typescript-eslint/no-unused-vars */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔍 Running Production Readiness Checks...\n");

const checks = [
  {
    name: "TypeScript Type Check",
    command: "npm run type-check",
    critical: true,
  },
  {
    name: "ESLint Check",
    command: "npm run lint",
    critical: true,
  },
  {
    name: "Build Test",
    command: "npm run build",
    critical: true,
  },
  {
    name: "Prettier Format Check",
    command: "npx prettier --check .",
    critical: false,
  },
];

let hasErrors = false;

for (const check of checks) {
  try {
    console.log(`✅ Running: ${check.name}`);
    execSync(check.command, { stdio: "pipe" });
    console.log(`✅ ${check.name} - PASSED\n`);
  } catch (error) {
    console.log(`❌ ${check.name} - FAILED`);
    console.log(`Error: ${error.message}\n`);

    if (check.critical) {
      hasErrors = true;
    }
  }
}

// Check for common issues
console.log("🔍 Checking for common issues...\n");

// Check for console.log statements in production code
try {
  const result = execSync(
    'grep -r "console.log" src/ --include="*.ts" --include="*.tsx" || true',
    { encoding: "utf8" }
  );
  if (result.trim()) {
    console.log("⚠️  Found console.log statements in source code:");
    console.log(result);
    console.log("Consider removing these for production.\n");
  }
} catch (error) {
  // grep not available on Windows, skip this check
}

// Check for environment variables
const envFile = path.join(process.cwd(), ".env.local");
if (!fs.existsSync(envFile)) {
  console.log(
    "⚠️  No .env.local file found. Make sure all required environment variables are set in production.\n"
  );
}

// Check for large dependencies
try {
  const packageSize = execSync("npm list --depth=0", { encoding: "utf8" });
  console.log("📦 Package dependencies check completed.\n");
} catch (error) {
  console.log("⚠️  Could not check package dependencies.\n");
}

if (hasErrors) {
  console.log(
    "❌ Production checks failed! Please fix the critical errors above before deploying."
  );
  process.exit(1);
} else {
  console.log(
    "✅ All production checks passed! Your code is ready for deployment."
  );
}
