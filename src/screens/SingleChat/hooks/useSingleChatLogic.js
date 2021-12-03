import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import firestore from "@react-native-firebase/firestore"
import { clearMessages, saveMessage, saveMessages } from "store/slices/messagesSlice"
import { useRoute } from "@react-navigation/core"

function useSingleChatLogic() {
	const [message, setMessage] = useState("")
	const messages = useSelector((state) => state.messages)
	const route = useRoute()
	const dispatch = useDispatch()

	useEffect(() => {
		let subscriber = null

		const eventListener = () => {
			subscriber = firestore()
				.collection("chats")
				.doc(route.params.id)
				.collection("messages")
				.onSnapshot((querySnapshot) => {
					querySnapshot.forEach((documentSnapshot) => {
						dispatch(
							saveMessage({
								message: documentSnapshot.data().message,
								id: documentSnapshot.id,
							})
						)
					})
				})
		}

		firestore()
			.collection("chats")
			.doc(route.params.id)
			.collection("messages")
			.orderBy("createdAt", "asc")
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size) {
					dispatch(
						saveMessages(
							querySnapshot.docs.map((e) => ({
								id: e.id,
								message: e.data().message,
							}))
						)
					)
				}
				eventListener()
			})

		return () => {
			if (subscriber) subscriber()
			dispatch(clearMessages())
		}
	}, [])

	const handleTextinputChanged = (e) => setMessage(e)

	const onSendClick = () => {
		if (!message.length) return
		setMessage("")
		firestore().collection("chats").doc(route.params.id).collection("messages").add({
			message: message,
			createdAt: firestore.FieldValue.serverTimestamp(),
		})
	}

	return {
		messages,
		message,
		handleTextinputChanged,
		onSendClick,
	}
}

export default useSingleChatLogic
