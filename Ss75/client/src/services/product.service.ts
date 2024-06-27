import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts: any = createAsyncThunk('products/getAllProducts', async () => {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
});
