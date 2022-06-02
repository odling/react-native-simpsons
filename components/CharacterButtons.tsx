import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useAppDispatch } from "../store/hooks";
import {
  characterMovedUp,
  charactedMovedDown,
  characterDeleted
} from "../features/characters/characterSlice";
import { AntDesign, Ionicons } from "@expo/vector-icons";

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
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleMoveUp}>
        <Ionicons
          name="arrow-up-circle-outline"
          color={"green"}
          size={25}
        ></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMoveDown}>
      <Ionicons
          name="arrow-down-circle-outline"
          color={"red"}
          size={25}
        ></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
      <AntDesign
          name="delete"
          color={"black"}
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
    marginHorizontal: 3,
    justifyContent: "center"
  },
});
