import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import firestore from "@react-native-firebase/firestore"
import { saveChat, saveChats } from "store/slices/chatsSlice"

function useChatsListLogic() {
	const chats = useSelector((state) => state.chats)
	const dispatch = useDispatch()

	useEffect(() => {
		let subscriber = null

		const eventListener = () => {
			subscriber = firestore()
				.collection("chats")
				.onSnapshot((querySnapshot) => {
					querySnapshot.forEach((documentSnapshot) => {
						if (documentSnapshot.data().title) {
							dispatch(
								saveChat({
									title: documentSnapshot.data().title,
									id: documentSnapshot.id,
								})
							)
						}
					})
				})
		}

		firestore()
			.collection("chats")
			.get()
			.then((querySnapshot) => {
				if (querySnapshot.size) {
					dispatch(
						saveChats(
							querySnapshot.docs.map((e) => ({
								id: e.id,
								title: e.data().title,
							}))
						)
					)
				}
				eventListener()
			})

		return () => {
			if (subscriber) subscriber()
		}
	}, [])

	return {
		chats,
	}
}

export default useChatsListLogic
