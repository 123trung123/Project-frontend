import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products:[],
  status:"start",
  error:""
};

const url = "https://66a07b747053166bcabb8c62.mockapi.io/Products"
export const getList = createAsyncThunk("products/getList",async(page)=>{
    const res =  await axios.get(url)
    return res.data
})
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // addProducts(state, action) {
    //   const biggestID =
    //     state.products.reduce((a, b) => Math.max(b.id, a), 0) + 1;
    //   const newProduct = {
    //     id: biggestID,
    //     name: action.payload.name,
    //   };
    //   state.products.push(newProduct);
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
    // deleteProducts(state, action) {
    //   state.products = state.products.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
    // editProduct(state, action) {
    //   state.products = state.products.map((item) =>
    //     item.id === action.payload.id
    //       ? { ...item, name: action.payload.name }
    //       : item
    //   );
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addProducts=(state, action) =>{
      const biggestID =
        state.status.reduce((a, b) => Math.max(b.id, a), 0) + 1;
      const newProduct = {
        id: biggestID,
        name: action.payload.name,
      };
      state.status.push(newProduct);
      localStorage.setItem("products", JSON.stringify(state.products));
    };
  },
});
export const {addProducts,deleteProducts,editProduct} = productsSlice.actions;
export default productsSlice.reducer;
