import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name :'music',
    initialState : [],
    reducers :{
        addMusicList : (state , action) => {
            state = [...action.payload]
            return state
        }
    }
})

export const {addMusicList} = slice.actions
export const musicReducers = slice.reducer