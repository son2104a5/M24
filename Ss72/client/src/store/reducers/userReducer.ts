import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface";
import axios from "axios";

const initialState: User[] = []

export const getUser: any = createAsyncThunk(
    "users/getAllUsers",
    async () => {
        const response = await axios.get("http://localhost:3000/users")
        return response.data
    }
)

// hàm đi them user
export const addUser: any = createAsyncThunk("users/addUser", async (user) => {
    const res = await axios.post("http://localhost:3000/users",user)
    return res.data
})
// hàm đi xóa user
export const removeUser: any = createAsyncThunk("users/deleteUser", async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`)
    return res.data
})
// hàm đi sửa thông tin user
export const updateUser: any = createAsyncThunk("users/updateUser", async ({ id, name }: { id: string; name: string }) => {
    const res = await axios.patch(`http://localhost:3000/users/${id}`, { name });
    return res.data;
});
const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: initialState
    },
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder
         .addCase(getUser.pending, (state: any, action: any) => {
            // trạng thái chờ lấy dữ liệu
         })
         .addCase(getUser.fulfilled, (state: any, action: any) => {
            // trạng thái lấy dữ liệu thành công
            state.users = action.payload
         })
         .addCase(getUser.rejected, (state: any, action: any) => {
            // trạng thái lấy dữ liệu thất bại
         })
         .addCase(addUser.fulfilled, (state: any, action: any) => {
            state.users.push(action.payload)
         })
         .addCase(removeUser.fulfilled, (state: any, action: any) => {
            state.users.filter((item: any) => {
                return item.id != action.payload.id
            })
            state.users = [...state.users]
         })
         .addCase(updateUser.fulfilled, (state: any, action: any) => {
            const index = state.users.findIndex((item: any) => item.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        });
    }
})

export default userSlice.reducer