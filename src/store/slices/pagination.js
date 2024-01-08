import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page: 1
}
const paginationSlice = createSlice({
    name: "paginationSlice",
    initialState: initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },

    }
})
export const {
    setPage
} = paginationSlice.actions;

export default paginationSlice.reducer;