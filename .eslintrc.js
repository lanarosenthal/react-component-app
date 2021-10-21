module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": ["error", "windows"], 
        'react/prop-types': ['off'],
        "no-unused-vars": "off",
        "no-shadow": "off",
        "no-sequences": "off",
        "no-unused-expressions": "off",
        "react/jsx-filename-extension": "off"
    }
};
