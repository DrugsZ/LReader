module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    [
      "import", 
      {
        "libraryName": "antd",
        "libraryDirectory": 'es',
        "style": 'css',
      }
    ],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    ["@babel/plugin-proposal-decorators", {"decoratorsBeforeExport":true}],
    "react-hot-loader/babel"
  ],
};