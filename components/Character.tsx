import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import NavigationService from "../services/NavigationService";
import CharacterButtons from "./CharacterButtons";
import { ICharacter } from "../features/characters/characterSlice";

export default function Character({
  character,
  characterDirection,
  image,
  quote,
  index,
}: ICharacter & { index: number }) {
  const goToDetails = () => {
    NavigationService.navigate("Details", {
      character,
      characterDirection,
      image,
      quote,
    });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={goToDetails}
    >
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{character}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CharacterButtons index={index} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  indexContainer: {
    flex: 0.08,
  },
  imageContainer: {
    flex: 0.1,
  },
  nameContainer: {
    flex: 0.5,
    paddingLeft: 10,
    alignItems: "flex-start",
  },
  buttonContainer: {
    flex: 0.35,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 5,
  },
  index: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
  },
});
