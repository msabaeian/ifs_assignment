import { Platform } from "react-native"

const ThemeColors = {
	BG: "#191A2A",
	TEXT_PRIMARY: "#fff",
	TEXT_SECONDARY: "#1C1C1E",
	BLUE: "#2190FF",
	CARD_BACKGROUND: "#242537",
	CARD_BORDER: "#3A3A3C",
	WHITE: "#fff",
	INPUT_BG: "rgba(58, 58, 60, 0.2)",
}

const RoutesName = {
	CHATS: "CHATS",
	CHAT: "CHAT",
}

const isAndroid = Platform.OS === "android"

export { ThemeColors, RoutesName, isAndroid }
