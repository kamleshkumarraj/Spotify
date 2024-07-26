import { configureStore } from "@reduxjs/toolkit";
import { musicReducers } from "./slices/allMusic.reducer";

const store = configureStore({
    reducer : {
        musicList : musicReducers
    }
})

export default store;