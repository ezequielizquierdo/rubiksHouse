import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data/products.json"
import allCategories from "../../data/categories.json"

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      categorySelected: "",
      productIdSelected: null,
      products: allProducts,
      categories: allCategories,
      productsFilteredByCategory: []
    },
  },
  reducers: {
    setCategorySelected: (state, action) => {
      const categorySelected = action.payload;
      const productsFiltered = allProducts.filter((product)=>product.category === categorySelected)
      state.value.categorySelected = categorySelected
      state.value.productsFilteredByCategory = productsFiltered
    },
    setProductIdSelected: (state, action) => {
      state.value.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer