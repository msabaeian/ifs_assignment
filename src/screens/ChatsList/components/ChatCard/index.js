import Text from "components/Text"
import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { ThemeColors, RoutesName } from "constant"
import perfectSize from "utilities/perfectSize"
import { useNavigation } from "@react-navigation/core"
import firestore from "@react-native-firebase/firestore"
import moment from "moment"

function ChatCard(props) {
	const { navigate } = useNavigation()
	const isNew = props.id === "new"

	const onPress = () => {
		if (isNew) {
			const date = moment().format("ddd, HH:mm")
			firestore()
				.collection("chats")
				.add({
					createdAt: firestore.FieldValue.serverTimestamp(),
					title: date,
				})
				.then((e) => {
					navigate(RoutesName.CHAT, { title: date, id: e.id })
				})
		} else {
			navigate(RoutesName.CHAT, { title: props.title, id: props.id })
		}
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon
				name={isNew ? "plus-circle-outline" : "message-processing"}
				color={ThemeColors.TEXT_PRIMARY}
				size={40}
			/>
			<Text ABeeZEE={isNew} size={17} style={styles.text}>
				{props.title}
			</Text>
			{!isNew ? (
				<Icon name="chevron-right" color={ThemeColors.TEXT_PRIMARY} size={20} style={styles.right} />
			) : null}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		height: perfectSize(76),
		backgroundColor: ThemeColors.CARD_BACKGROUND,
		paddingHorizontal: perfectSize(12),
		borderBottomColor: ThemeColors.CARD_BORDER,
		borderBottomWidth: 1,
	},
	text: {
		marginLeft: perfectSize(16),
	},
	right: {
		marginLeft: "auto",
	},
})

ChatCard.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
}

export default ChatCard
