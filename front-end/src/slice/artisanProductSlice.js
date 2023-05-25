import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getArtisanProducts = createAsyncThunk( 'artisanProducts/getArtisanProducts', async(id)=>{
   
    try {
        const response = await axios.get(`http://localhost:7000/api/products/artisan/${id}`)
        console.log(response);
        return response.data.products
    } catch (error) {
        throw Error("Failed to fetch products");
      }
})


const ArtisanProductsSlice = createSlice({
    name:'ArtisanProducts',
    initialState:{
        products:[],
        isloading: false,
        errors: null
    },extraReducers :(builder)=>{
        builder
        .addCase(getArtisanProducts.pending,(state)=>{
            state.isloading=true
            state.errors=null
        })
        .addCase(getArtisanProducts.fulfilled,(state,action)=>{
            state.products=action.payload
            state.isloading=false
            state.errors=null
        })
        .addCase(getArtisanProducts.rejected,(state,action)=>{
            state.isloading=false
            state.errors=action.error.message;
        })
    }
})

export default ArtisanProductsSlice.reducer