module.exports = {
	env: {
		es2021: true,
		node: true,
		"react-native/react-native": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "react-native", "prettier"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react-native/no-unused-styles": 2,
		"react-native/split-platform-components": 2,
		"react-native/no-inline-styles": 2,
		"react-native/no-color-literals": 2,
		"react-native/no-raw-text": 2,
		"react-native/no-single-element-style-arrays": 2,
	},
}
