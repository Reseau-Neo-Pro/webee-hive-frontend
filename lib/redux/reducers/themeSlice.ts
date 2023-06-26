import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  lightTheme: boolean;
}

const initialState: ThemeState = {
  lightTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
