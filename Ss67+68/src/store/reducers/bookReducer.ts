interface Book {
    id: number;
    name: string;
    stdBorrow: string;
    borrowDate: string;
    payback: string;
    status: boolean
}

const initialState: Book[] = JSON.parse(localStorage.getItem('Books') || '[]')

let updatedState;

const bookReducer = (state = initialState, action: {
    type: string;
    payload?: any;
}) => {
    switch (action.type) {
        case 'CHANGE_LIST':
            return initialState.filter(book => String(book.status) === action.payload);
        case 'CHANGE_STATUS':
            updatedState = state.map(book =>
                book.id === action.payload.id ? { ...book, status: action.payload.status } : book
            );
            localStorage.setItem('Books', JSON.stringify(updatedState))
            return updatedState
        case 'EDIT':
            updatedState = state.map(book =>
                book.id === action.payload.id? {...book, name: action.payload.name } : book
            );
            localStorage.setItem('Books', JSON.stringify(updatedState))
            return updatedState
        case 'ADD':
            updatedState = [...state, action.payload];
            localStorage.setItem('Books', JSON.stringify(updatedState))
            return updatedState
        case 'DELETE':
            updatedState = state.filter(book => book.id!== action.payload);
            localStorage.setItem('Books', JSON.stringify(updatedState))
            return updatedState
        default:
            return state
    }
}

export default bookReducer;