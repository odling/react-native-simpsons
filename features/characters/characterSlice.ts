import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICharacter {
  character: string;
  characterDirection: string;
  image: string;
  quote: string;
}

export const getStoredData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@character_data')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const storeCharacterData = async (value: ICharacter[] ) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@character_data', jsonValue)
  } catch (e) {
    // saving error
  }
}

const initialState: {
  data: ICharacter[];
} = {
  data: [
    // {
    //   character: "Homer Simpson",
    //   characterDirection: "Safety Inspector",
    //   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    //   quote: "denedfgzfgsfgzfgfdg",
    // },
    // {
    //   character: "deneme1",
    //   characterDirection: "sfgdfgdfg",
    //   image: "../assets/images/icon.png",
    //   quote: "denedfgzfgsfgzfgfdg",
    // },
    // {
    //   character: "deneme2",
    //   characterDirection: "sfgdfgdfg",
    //   image: "../assets/images/splash.png",
    //   quote: "denedfgzfgsfgzfgfdg",
    // },
  ],
};

const characterSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    fetchedDataLoaded(state, action: PayloadAction<ICharacter[]>) {
      state.data = action.payload;
      storeCharacterData(state.data);
    },
    characterAdded(state, action: PayloadAction<ICharacter>) {
      state.data.push(action.payload);
      storeCharacterData(state.data);
    },
    //characterDeleted
    characterDeleted(state, action: PayloadAction<number>) {
      state.data = state.data.filter((char, index) => {
        return index !== action.payload;
      });
      storeCharacterData(state.data);
    },

    //characterMovedUp
    characterMovedUp(state, action: PayloadAction<number>) {
      if (action.payload === 0) return;
      const character = state.data[action.payload];
      state.data[action.payload] = state.data[action.payload - 1];
      state.data[action.payload - 1] = character;
      storeCharacterData(state.data);
    },

    //characterMovedDown
    charactedMovedDown(state, action: PayloadAction<number>) {
      if (action.payload === state.data.length - 1) return;
      const character = state.data[action.payload];
      state.data[action.payload] = state.data[action.payload + 1];
      state.data[action.payload + 1] = character;
      storeCharacterData(state.data);
    },
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://thesimpsonsquoteapi.glitch.me',
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query<ICharacter[], {}>({
        query(limit = 10) {
          return `/quotes?count=${limit}`;
        },
      }),
    };
  },
});

export const {
  fetchedDataLoaded,
  characterAdded,
  charactedMovedDown,
  characterDeleted,
  characterMovedUp,
} = characterSlice.actions;
export const { useFetchCharactersQuery  } = apiSlice;
export default characterSlice.reducer;
