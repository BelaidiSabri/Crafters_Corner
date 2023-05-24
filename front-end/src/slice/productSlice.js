import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProducts = createAsyncThunk('products/getAllProducts', async()=>{
    try {
        const response = await axios.get('http://localhost:7000/api/products')
        console.log(response.data.products)
        return response.data.products
    } catch (error) {
        throw Error("Failed to fetch products");
      }
})


const ProductSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.loading= false
            state.error=action.error
        })
    }
})

export default ProductSlice.reducer