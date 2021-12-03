const { Platform } = require("react-native")

const fontFamily = (ABeeZEE = false) =>
	Platform.select({
		android: {
			fontFamily: ABeeZEE ? "ABeeZeeRegular" : "RobotoRegular",
		},
		ios: {
			fontFamily: ABeeZEE ? "ABeeZee" : "Roboto",
		},
	})

export default fontFamily
