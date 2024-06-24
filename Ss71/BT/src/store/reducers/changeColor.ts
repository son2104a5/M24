import { createSlice } from "@reduxjs/toolkit";

const changeColorReducer = createSlice({
    name: 'changeColor',
    initialState: {
        color: true
    },
    reducers: {
        changeColorBg: (state) => {
            state.color = !state.color
        }
    }
})

export const { changeColorBg } = changeColorReducer.actions

export default changeColorReducer.reducer
