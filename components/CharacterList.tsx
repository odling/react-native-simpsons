import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useFetchCharactersQuery } from "../features/characters/characterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Character from "./Character";
import {
  fetchedDataLoaded,
  getStoredData,
} from "../features/characters/characterSlice";
import Box from "./styled/Box";
import Text from "./styled/Text";

export default function CharacterList() {
  const numberOfItems = 20;
  const {
    data = [],
    isLoading,
    isSuccess,
  } = useFetchCharactersQuery(numberOfItems);

  const dispatch = useAppDispatch();

  const getStoredCharacters = async () => {
    let storedCharacters = await getStoredData();
    if (!storedCharacters || storedCharacters.length == 0) {
      isSuccess && dispatch(fetchedDataLoaded(data));
    } else {
      dispatch(fetchedDataLoaded(storedCharacters));
    }
  };

  useEffect(() => {
    getStoredCharacters();
  }, [isSuccess]);

  const charData = useAppSelector((state) => state.character.data);

  return isLoading ? (
    <Box
      backgroundColor="background"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text color="primary" variant="header" style={{ fontSize: 24 }}>
        Loading
      </Text>
    </Box>
  ) : (
    <Box backgroundColor="background" style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => (
          <Box backgroundColor="primary" style={{ height: 1 }}></Box>
        )}
        data={charData}
        renderItem={({ item, index }) => (
          <Character {...item} index={index} key={item.quote}></Character>
        )}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
  },
  list: {
    paddingBottom: 70,
  },
});
