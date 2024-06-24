import { createSlice } from "@reduxjs/toolkit";

const countState: number = 0;

const countReducer = createSlice({
    name: 'count',
    initialState: countState,
    reducers: {
        // đây là những action
        increase: (state) => state += 1,
        decrease: (state) => state -= 1
    }
})
// Xuất ra những action
export const { increase, decrease } = countReducer.actions;
// Xuất ra thẳng reducer
export default countReducer.reducer