import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: 'topic',
    initialState: [],
    reducers: {
        changeTopic: (state, action) => {
            return [action.payload]
        }
    }
})

export const {changeTopic} = topicSlice.actions;
export default topicSlice.reducer;