import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: true,
      token: null,
      imageCamera: null, // Se inicializa como null, pero es el estado inicial de la camara
      localId: "idlocalCustom",
      profileImage: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.data.email,
        token: action.payload.data.idToken,
      };
    },
    clearUser: (state) => (state.value = { user: null, token: null }),
    setCameraImage: (state, action) => { // Esta funcion setea la imagen
      state.value = {
        ...state.value, // Tomo todos los datos en state.value
        imageCamera: action.payload,  // Seteo la prop imageCamera
      };
    },
    setProfileImage: (state, action) => {
      state.value = {
        ...state.value,
        profileImage: action.payload, // Seteo profileImage con la action.payload
      };
    },
  },
});

export const { setUser, clearUser, setCameraImage, setProfileImage } = authSlice.actions;

export default authSlice.reducer;