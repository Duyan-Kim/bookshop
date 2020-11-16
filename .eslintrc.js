module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
