import { createSlice } from "@reduxjs/toolkit"

export const messagesSlice = createSlice({
	name: "messages",
	initialState: [],
	reducers: {
		saveMessage: (state, action) => {
			if (state.filter((a) => a.id === action.payload.id).length === 0) state.push(action.payload)
		},
		saveMessages: (_, action) => {
			if (action.payload && action.payload.length) return [...action.payload]
		},
		clearMessages: () => {
			return []
		},
	},
})

export const { saveMessage, saveMessages, clearMessages } = messagesSlice.actions

export default messagesSlice.reducer
