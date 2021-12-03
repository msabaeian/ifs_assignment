import Text from "components/Text"
import React from "react"
import { StyleSheet, View } from "react-native"
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { ThemeColors } from "constant"
import perfectSize from "utilities/perfectSize"

function MessageCard(props) {
	return (
		<View style={styles.container}>
			<Icon name={"account-circle"} color={"#858D97"} size={perfectSize(40)} />
			<View style={styles.text}>
				<Text size={17} color="secondary">
					{props.message}
				</Text>
				<View style={styles.leftArrow} />
				<View style={styles.leftArrowOverlap} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		maxWidth: "60%",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingLeft: perfectSize(8),
		marginBottom: perfectSize(13),
	},
	text: {
		marginLeft: perfectSize(16),
		backgroundColor: ThemeColors.WHITE,
		paddingVertical: perfectSize(8),
		paddingHorizontal: perfectSize(12),
		borderRadius: perfectSize(17.5),
		position: "relative",
		alignSelf: "flex-start",
	},
	leftArrow: {
		position: "absolute",
		backgroundColor: ThemeColors.WHITE,
		width: 20,
		height: 25,
		bottom: -2,
		borderBottomRightRadius: 25,
		left: -11,
	},
	leftArrowOverlap: {
		position: "absolute",
		backgroundColor: ThemeColors.BG,
		width: 20,
		height: 35,
		bottom: -11,
		borderBottomRightRadius: 18,
		left: -20,
	},
})

MessageCard.propTypes = {
	message: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
}

export default MessageCard
