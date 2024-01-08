import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    language: "en"
}
const changeLanguageSlice = createSlice({
    name: "changeLanguageSlice",
    initialState: intialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }

})
export const {
    changeLanguage
} = changeLanguageSlice.actions;

export default changeLanguageSlice.reducer;