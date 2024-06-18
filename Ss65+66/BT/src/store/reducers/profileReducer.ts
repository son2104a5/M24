interface Profile {
    id: number;
    name: string;
    gender: string;
    dateofbirth: string;
    address: string;
}

const initialState: Profile = {
    id: 1,
    name: 'Nguyễn Đắc Sơn',
    gender: 'Nam',
    dateofbirth: '2004-08-21',
    address: 'Triều Khúc, Hà Nội'
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default profileReducer;