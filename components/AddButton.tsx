import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import NavigationService from "../services/NavigationService";
import { Ionicons } from "@expo/vector-icons";

export default function AddButton() {
  const goToAddScreen = () => {
    NavigationService.navigate("Add");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToAddScreen}>
      <Ionicons
        size={30}
        name="add"
        color={"white"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
  },
});
