import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { theme } from "../../constants/Theme";

interface IThemeState {
  name: keyof typeof theme;
}

const initialState: IThemeState = {
  name: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSwitched(state) {
      state.name = state.name === "dark" ? "light" : "dark";
    },
  },
});

export const { themeSwitched } = themeSlice.actions;
export default themeSlice.reducer;
