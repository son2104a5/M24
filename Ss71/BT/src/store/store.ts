import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './/reducers/countReducer';
import createRandom from './reducers/createRandom';
import changeColor from './reducers/changeColor';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    numbers: createRandom,
    changeColor: changeColor
  },
});

export default store;
