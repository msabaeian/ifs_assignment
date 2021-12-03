import * as React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChatsList from "screens/ChatsList"
import SingleChat from "screens/SingleChat"
import { RoutesName } from "constant"
import { ThemeColors } from "./constant"
import fontFamily from "utilities/fontFamily"
import { Provider } from "react-redux"
import store from "./store"
import { StatusBar } from "react-native"

const Stack = createNativeStackNavigator()

const headerOption = (title) => ({
	title,
	headerTitleAlign: "center",
	headerStyle: {
		backgroundColor: ThemeColors.CARD_BACKGROUND,
	},
	headerTitleStyle: {
		...fontFamily(false),
	},
})

const MyTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: ThemeColors.BG,
		text: "white",
	},
}

function App() {
	return (
		<Provider store={store}>
			<StatusBar backgroundColor={ThemeColors.BG} barStyle="light-content" />
			<NavigationContainer theme={MyTheme}>
				<Stack.Navigator>
					<Stack.Screen
						name={RoutesName.CHATS}
						component={ChatsList}
						options={{
							...headerOption("Home"),
							headerStyle: { backgroundColor: ThemeColors.BG },
						}}
					/>
					<Stack.Screen
						name={RoutesName.CHAT}
						component={SingleChat}
						options={({ route }) => ({ ...headerOption("Single"), title: route.params.title })}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App
