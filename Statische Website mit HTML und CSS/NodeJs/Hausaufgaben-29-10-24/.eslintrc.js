// package.json
"scripts": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.{js,vue}": [
      "eslint",
      "prettier --write"
    ]
  }