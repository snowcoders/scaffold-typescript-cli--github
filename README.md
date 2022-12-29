# Snowcoders CLI Scaffold

This represents the base of all of Snowcoder's CLI projects

## Things to check

- Dist output dependencies
  - Any dependencies found by searching `import` or `require` in the `dist` and `dist-cjs` folders should be in the package.json's `dependencies` section, not devDependencies
