import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "build/",
      "dist/",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "prisma/generated/",
      "coverage/",
      ".vercel/",
      "public/"
    ]
  },
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  {
    languageOptions: {
      globals: {
        React: "readonly"
      }
    },
    rules: {
      // Prevent unused variables and imports
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }],
      "no-unused-vars": "off", // Turn off base rule as it conflicts with TypeScript rule
      
      // Prevent console statements in production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      
      // Ensure proper import/export usage
      "import/no-unresolved": "error",
      "import/named": "error",
      
      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      
      // React specific rules
      "react-hooks/exhaustive-deps": "warn",
      "react/no-unescaped-entities": "error",
      "react/self-closing-comp": "error",
      
      // General code quality
      "prefer-const": "error",
      "no-var": "error",
      "no-undef": "error",
      "no-redeclare": "error",
      
      // Prevent common mistakes
      "no-duplicate-imports": "error",
      "no-duplicate-case": "error",
      "no-dupe-keys": "error",
      
      // Async/await best practices
      "no-async-promise-executor": "error",
      "no-await-in-loop": "warn",
      
      // Security considerations
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
    }
  }
];

export default eslintConfig;
