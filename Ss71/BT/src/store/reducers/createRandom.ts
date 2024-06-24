import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomNumber: 0,
};
export const numbers: number[] = []
const createRamdom = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    generateRandomNumbers: (state) => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      state.randomNumber = randomNumber;
      numbers.push(randomNumber);
    },
  },
});

export const { generateRandomNumbers } = createRamdom.actions;
export default createRamdom.reducer;