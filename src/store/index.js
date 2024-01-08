import { configureStore } from "@reduxjs/toolkit";
import favSlice from './slices/addFavouriteSlice';
import changeLanguageSlice from './slices/language'
import paginationSlice from './slices/pagination'
export default configureStore({
    reducer: {
        tooglefavourite: favSlice,
        changeLanguage:changeLanguageSlice,
        changePage:paginationSlice
    }
})