import React, { useEffect } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useFetchCharactersQuery } from "../features/characters/characterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Character from "./Character";
import { fetchedDataLoaded, getStoredData } from "../features/characters/characterSlice";

export default function CharacterList() {

  const numberOfItems = 20;
  const {
    data = [],
    isLoading,
    isSuccess
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Loading</Text>
    </View>
  ) : (
    <FlatList
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "gray" }}></View>
      )}
      data={charData}
      renderItem={({ item, index }) => (
        <Character {...item} index={index} key={item.quote}></Character>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
  },
  list: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});
