const initialState: number[] = []

const rnReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CREATE_NUMBER':
            let rn = Math.floor(Math.random() * 100);
            return [...state, rn];
        default:
            return state;
    }
}

export default rnReducer;
