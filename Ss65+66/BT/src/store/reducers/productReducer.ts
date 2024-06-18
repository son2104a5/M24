interface Product {
    id: number;
    product_name: string;
    price: number;
    stock: number;
}

const initialState: Product[] = [
    {
        id: 1,
        product_name: 'Cam sành',
        price: 20000,
        stock: 10
    },
    {
        id: 2,
        product_name: 'Bưởi ba roi',
        price: 50000,
        stock: 15
    }
]

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload]
        default:
            return state
    }
}

export default productReducer;