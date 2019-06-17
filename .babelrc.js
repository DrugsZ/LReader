module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
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