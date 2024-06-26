import axios from "axios";
import { Todo } from "../../interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: Todo[] = [];

export const getTodo: any = createAsyncThunk(
  "todos/getAllTodos",
  async () => {
    const response = await axios.get("http://localhost:3000/jobs")
    return response.data;
  }
)

export const checkComplete: any = createAsyncThunk(
  "todos/checkCompleteJob",
  async ({ id, job }: { id: number, job: Todo }) => {
    const response = await axios.patch(`http://localhost:3000/jobs/${id}`, {
      ...job,
      status: !job.completed
    })
    return response.data;
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: initialState
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTodo.pending, (state, action: any) => {
    })
    .addCase(getTodo.fulfilled, (state, action: any) => {
      state.todos = action.payload;
    })
    .addCase(getTodo.rejected, (state, action: any) => {
    })
    .addCase(checkComplete.fulfilled, (state, action: any) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
    })
  }
})

export default todoSlice.reducer;