import { ThemeColors, isAndroid } from "constant"
import React from "react"
import {
	FlatList,
	StyleSheet,
	SafeAreaView,
	View,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native"
import perfectSize from "utilities/perfectSize"
import MessageCard from "./components/MessageCard"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import fontFamily from "utilities/fontFamily"
import useSingleChatLogic from "./hooks/useSingleChatLogic"

function SingleChat() {
	const { messages, handleTextinputChanged, message, onSendClick } = useSingleChatLogic()

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={messages}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <MessageCard {...item} />}
				style={styles.container}
				contentContainerStyle={[styles.container, styles.sc]}
			/>

			<KeyboardAvoidingView
				keyboardVerticalOffset={isAndroid ? 0 : perfectSize(90)}
				behavior={isAndroid ? "height" : "position"}
			>
				<View style={styles.message}>
					<TextInput
						style={styles.input}
						placeholder="Type here"
						placeholderTextColor={ThemeColors.WHITE}
						value={message}
						onChangeText={handleTextinputChanged}
					/>
					<TouchableOpacity style={styles.send} onPress={onSendClick}>
						<Icon name="send" color={ThemeColors.BLUE} size={28} />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sc: {
		paddingTop: perfectSize(31),
	},
	message: {
		width: "100%",
		backgroundColor: ThemeColors.CARD_BACKGROUND,
		height: perfectSize(50),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: perfectSize(16),
		paddingVertical: perfectSize(7),
	},
	input: {
		backgroundColor: ThemeColors.INPUT_BG,
		width: "85%",
		height: perfectSize(36),
		color: ThemeColors.WHITE,
		borderRadius: perfectSize(10),
		paddingHorizontal: perfectSize(12),
		fontSize: perfectSize(17),
		paddingVertical: 0,
		...fontFamily(false),
	},
	send: {
		justifyContent: "center",
		alignItems: "center",
	},
})

export default SingleChat
