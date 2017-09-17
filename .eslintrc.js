module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jest"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jest/globals": true
    },
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/prefer-stateless-function": [0, { "ignorePureComponents": 0 }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "semi": ["error", "never"]
    }
};