module.exports = {
  overrides: [
    {
      files: ['.astro/**/*.d.ts', '.astro/**/*.ts', '.astro/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
};
