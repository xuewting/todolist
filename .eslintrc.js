export default {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "extends": "plugin:vue/recommended",
  "rules": {
    "semi": "error",
    "eqeqeq": [2, "allow-null"],
    "no-console": "off",
    "no-constant-condition": "error",
    "no-extra-semi": "warn",
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-empty-pattern": 2,
    "no-floating-decimal": 2,
    "no-invalid-this": 2,
    "no-redeclare": 2
  }
}
