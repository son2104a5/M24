const initialState = JSON.parse(localStorage.getItem('products') || '[]')

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
}

let updateState;

const productReducer = (state = initialState, action: {
    type: string,
    payload?: any
}) => {
    switch (action.type) {
        case 'DECREASE_PRODUCT':
            updateState = state.map((item: Product) => {
                if (item.id === action.payload) {
                    item.quantity -= 1
                }
                return item
            })
            localStorage.setItem('products', JSON.stringify(updateState))
            return updateState
        default:
            return state
    }
}

export default productReducer;