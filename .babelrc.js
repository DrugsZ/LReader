module.exports = {
  presets: [
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
        "style": 'css',
      }
    ]
  ]
};