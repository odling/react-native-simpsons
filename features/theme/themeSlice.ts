import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Colors from "../../constants/Colors";

interface IThemeState {
    name: keyof typeof Colors;
}

const initialState: IThemeState = {
    name: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        themeSwitched(state) {
            state.name = state.name === "dark" ? "light" : "dark";
        }
    }
})

export const { themeSwitched } = themeSlice.actions;
export default themeSlice.reducer;