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
    setUpdate(state, action) {
      const {
        id,
        title,
        brand,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        category,
        thumbnail,
      } = action.payload.formUpdate;
      let isProduct = state.data.filter((product) => product.id === id);
      if (isProduct) {
        isProduct[0].title = title;
        isProduct[0].brand = brand;
        isProduct[0].thumbnail = thumbnail;
        isProduct[0].description = description;
        isProduct[0].price = price;
        isProduct[0].category = category;
        isProduct[0].discountPercentage = discountPercentage;
        isProduct[0].rating = rating;
        isProduct[0].stock = stock;
      }
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { setProduct, getProduct, setUpdate, getSearch, deleteProduct } =
  productReducer.actions;

export default productReducer.reducer;
