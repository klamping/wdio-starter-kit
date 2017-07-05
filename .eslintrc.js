module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "rules": {
      "semi": [2, "always"],
      "no-extra-semi": 2
    },
    globals: {
      browser: false,
      expect: false,
      $: false,
      $$: false
    },
    "env": {
      "mocha": true
    }
};