import { base_url } from "../firebase/database";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //     query: () => 'products.json'
    // }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
    getProfileImage: builder.query({ // Accedo al recurso con el build.query
      query: (localId) => `profileImages/${localId}.json`, // La ruta va al profileImage y valida si hay imagen
    }),
    postProfileImage: builder.mutation({ 
      query: ({ localId, image }) => ({ // Le pasamos el localId y la image
        url: `profileImages/${localId}.json`, // La ruta va al profileImage, si no existe lo crea
        method: "PUT", // Usamos el metodo PUT para que no genere una clave adicional cuando creamos el recurso. Si usamos POST, si lo generaria.
        body: {
          image: image, // Le paso la imagen que recibe por parámetro.
        },
      }),
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  usePostOrderMutation,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = shopApi;