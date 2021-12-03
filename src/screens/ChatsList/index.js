import React from "react"
import { FlatList, StyleSheet, SafeAreaView } from "react-native"
import ChatCard from "./components/ChatCard"
import useChatsListLogic from "./hooks/useChatsListLogic"

function ChatsList() {
	const { chats } = useChatsListLogic()
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={chats}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <ChatCard {...item} />}
				style={styles.container}
				contentContainerStyle={styles.container}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ChatsList
