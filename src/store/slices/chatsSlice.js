import { createSlice } from "@reduxjs/toolkit"

const chatsSliceInitial = [{ title: "Start New Chat", id: "new" }]

export const chatsSlice = createSlice({
	name: "chats",
	initialState: chatsSliceInitial,
	reducers: {
		saveChat: (state, action) => {
			if (state.filter((a) => a.id === action.payload.id).length === 0) state.push(action.payload)
		},
		saveChats: (state, action) => {
			return [...state, ...action.payload]
		},
	},
})

export const { saveChat, saveChats } = chatsSlice.actions

export default chatsSlice.reducer
