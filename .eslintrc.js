module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true
    },
    "rules":{
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
};