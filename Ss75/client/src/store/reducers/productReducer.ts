import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/product.service";
import { Product } from "../../interface";

const initialState: Product[] = [];

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: initialState,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                // Optionally handle loading state
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state) => {
                // Optionally handle errors
            });
    },
});

export default productsSlice.reducer;
