import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  characterMovedUp,
  charactedMovedDown,
  characterDeleted
} from "../features/characters/characterSlice";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { layout } from "../constants/Layout";
import { theme } from "../constants/Theme";

export default function CharacterButtons({ index }: { index: number }) {
  const dispatch = useAppDispatch();
  const handleMoveUp = () => {
    dispatch(characterMovedUp(index));
  };
  const handleMoveDown = () => {
    dispatch(charactedMovedDown(index));
  };
  const handleDelete = () => {
    dispatch(characterDeleted(index))
  }

  const themeName = useAppSelector((state) => state.theme.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleMoveUp}>
        <Ionicons
          name="arrow-up-circle-outline"
          color={theme[themeName].success}
          size={25}
        ></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMoveDown}>
      <Ionicons
          name="arrow-down-circle-outline"
          color={theme[themeName].danger}
          size={25}
        ></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
      <AntDesign
          name="delete"
          color={theme[themeName].primary}
          size={21}
        ></AntDesign>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 25,
    height: 25,
    marginHorizontal: layout.spacing.xs,
    justifyContent: "center"
  },
});
