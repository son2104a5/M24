export interface User {
    id: number;
    name: string;
}

export interface RootState {
    users: User[];
}