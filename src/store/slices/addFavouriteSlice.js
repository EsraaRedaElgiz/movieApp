import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    favouriteMovies: []
}
const toogleFavSlice = createSlice({
    name: "handleFavSlice",
    initialState: intialState,
    reducers: {
        toogleFav: (state, action) => {
            if (state.favouriteMovies.findIndex((item) => item.id === action.payload.id)!==-1) {
                let index = state.favouriteMovies.findIndex((item)=>item.id===action.payload.id)
                let filterdArr=[...state.favouriteMovies]
                filterdArr.splice(index,1)
                state.favouriteMovies = filterdArr
            } else {
                state.favouriteMovies =  [...state.favouriteMovies,action.payload]
            }
        }
    }

})
export const {
    toogleFav

} = toogleFavSlice.actions;

export default toogleFavSlice.reducer;