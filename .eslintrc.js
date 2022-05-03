module.exports = {
  env: {
    browser: true,
    es2021: true,
    // nodeをenvに追加することでmoduleなどのnodeのグローバル変数を認識する
    node: true,
  },
  // これが一番効いてほしいと思うものを一番後ろに配置する必要がある
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // envで設定したものが自動で設定されるため、こちらはいらない
    // ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  // rulesで設定するものは優先度が高くオーバーライドされてしまう
  rules: {
    "no-var": "error",
    "react/prop-types": "off",
    "no-undef": "error",
    "react/jsx-props-no-spreading": "off",
  },
  settings: {
    react: {
      // package.jsonのバーションを見てReactのバージョンを決定する
      version: "detect",
    },
  },
};
