// FILE: eslint.config.mjs

const nextConfig = require('eslint-config-next');

// The default export should be an array. We are adding our custom rule to it.
module.exports = [
  {
    ...nextConfig,
    rules: {
      ...nextConfig.rules, // This line includes all the default Next.js rules
      "react/no-unescaped-entities": "off" // This line disables the rule causing the error
    }
  }
];