module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					screens: "./src/screens",
					components: "./src/components",
					store: "./src/store",
					constant: "./src/constant",
					utilities: "./src/utilities",
				},
			},
		],
	],
}
