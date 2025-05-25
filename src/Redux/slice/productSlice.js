import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
    
    try {
        const result = await axios.get("http://localhost:8080/api/products");
        // const result = await res.json();
        // console.log(result.data);
        return result.data;   
    } catch (error) {
        console.error("Error fetching products:",error);
        throw error; 
    }
    
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload 
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })

    }
});

export default productSlice.reducer;