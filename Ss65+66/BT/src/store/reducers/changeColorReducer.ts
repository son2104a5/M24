const initialState: boolean = false

const changeColorReducer = (state = initialState, action: {
    type: string;
    payload?: boolean;
}) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return !state
        default:
            return state
    }
}

export default changeColorReducer;