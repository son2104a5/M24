const initialState = ''

const reducerState = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_STATE":
            return action.payload;
        default:
            return state;
    }
}

export default reducerState;