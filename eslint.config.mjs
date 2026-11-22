import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  { ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'] },
  // ESLint 9 only lints .js/.mjs/.cjs by default; the components are .jsx.
  { files: ['**/*.{js,jsx,mjs,cjs}'] },
  ...compat.extends('next/core-web-vitals'),
];

export default eslintConfig;
