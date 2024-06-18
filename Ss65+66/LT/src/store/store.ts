import { createStore } from 'redux'

import reducerCount from './reducers/countReducer'

const store = createStore(reducerCount)

export default store