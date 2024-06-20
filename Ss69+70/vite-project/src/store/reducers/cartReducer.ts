export const initialState = JSON.parse(localStorage.getItem('cart') || '[]')

interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const cartReducer = (state = initialState, action: {
    type: string;
    payload?: any;
}) => {
    let updateState;
    let productToAdd;
    switch (action.type) {
        case 'ADDTOCART':
            const existingProduct = state.find((item: Cart) => item.id === action.payload.id);
            if (!existingProduct) {
                productToAdd = {
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    image: action.payload.image,
                    quantity: 1
                }
                updateState = [...state, productToAdd]
                localStorage.setItem('cart', JSON.stringify(updateState))
            } else {
                updateState = state.map((item: Cart) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
                localStorage.setItem('cart', JSON.stringify(updateState))
            }
            return updateState
        case 'DELETE':
            updateState = state.filter((item: Cart) => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(updateState))
            return updateState
        default:
            return state
    }
}

export default cartReducer;