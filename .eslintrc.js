module.exports = {
    // "extends": "airbnb",
    "extends": ["airbnb-typescript", "plugin:@typescript-eslint/recommended",  "react-app", "plugin:prettier/recommended"],
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint", 
      "react",
    ],
    "env": {
      "browser": true,
      "node": true
    },
    "rules":{
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-var-requires":"off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      "import/no-unresolved": "off",
      "no-console": "off",
      "react/prop-types":"off" //bacause eslint hard to detect is we are in a stateless component
     },
};