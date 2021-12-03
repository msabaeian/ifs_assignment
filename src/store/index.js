import { configureStore } from "@reduxjs/toolkit"
import chatsSlice from "./slices/chatsSlice"
import messagesSlice from "./slices/messagesSlice"

const store = configureStore({
	reducer: {
		chats: chatsSlice,
		messages: messagesSlice,
	},
})

export default store
