import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { saveThemeLS } from "../../saveLocalStorage";

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
      saveThemeLS(state.lightTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
