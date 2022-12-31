# Snowcoders CLI Scaffold

This represents the base of all of Snowcoder's CLI projects

## Things to check

- Dist output dependencies
  - Any dependencies found by searching `import` or `require` in the `dist` and `dist-cjs` folders should be in the package.json's `dependencies` section, not devDependencies
  - Currently the src directory has a cli and lib folder. If you don't have a cli, you can remove this folder and move the contents of lib into src. If you do this, be sure to update the package.json dist referneces.
