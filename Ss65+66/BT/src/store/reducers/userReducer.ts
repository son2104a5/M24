interface User {
    id: number;
    name: string;
    gender: string;
    dateOfBirth: string;
    address: string;
}

const initialState: User[] = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        gender: 'Nam',
        dateOfBirth: '20/11/2023',
        address: 'Thanh Xuân, Hà Nội'
    },
    {
        id: 2,
        name: 'Nguyễn Văn B',
        gender: 'Nữ',
        dateOfBirth: '20/11/2023',
        address: 'Cầu Giấy, Hà Nội'
    }
]

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        
        default:
            return state
    }
}

export default userReducer;