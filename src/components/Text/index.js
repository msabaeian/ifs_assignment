import * as React from "react"
import { Text as T } from "react-native"
import PropTypes from "prop-types"
import perfectSize from "utilities/perfectSize"
import { ThemeColors } from "constant"
import fontFamily from "utilities/fontFamily"

function Text(props) {
	const { color, align, size, ABeeZEE, style, ...rest } = props
	const styles = {
		color: color === "primary" ? ThemeColors.TEXT_PRIMARY : ThemeColors.TEXT_SECONDARY,
		textAlign: align,
		fontSize: perfectSize(size),
		...fontFamily(ABeeZEE),
	}

	return (
		<T style={[styles, style]} {...rest}>
			{props.children}
		</T>
	)
}

Text.propTypes = {
	ABeeZEE: PropTypes.bool,
	size: PropTypes.number,
	color: PropTypes.oneOf(["primary", "secondary"]),
	align: PropTypes.oneOf(["left", "center"]),
	children: PropTypes.node,
	style: PropTypes.object,
}

Text.defaultProps = {
	ABeeZEE: false,
	size: 17,
	color: "primary",
	align: "left",
	children: "",
	style: null,
}

export default Text
