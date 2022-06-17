const { createSlice } = require("@reduxjs/toolkit");

const productReducer = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    getProduct(state, action) {
      state.status = "pending";
    },
    getSearch(state, action) {
      state.status = "pending";
    },

    setProduct: (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    },
  },
});

export const { setProduct, getProduct, getSearch } = productReducer.actions;

export default productReducer.reducer;
