import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import NavigationService from "../services/NavigationService";
import CharacterButtons from "./CharacterButtons";
import { ICharacter } from "../features/characters/characterSlice";
import Text from "./styled/Text";
import Box from "./styled/Box";

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
      activeOpacity={1}
      onPress={goToDetails}
    >
      <Box backgroundColor="foreground" style={styles.container} padding="s">
        <Box
          style={styles.indexContainer}
        >
          <Text color="primary" variant="body">
            {index}
          </Text>
        </Box>
        <Box style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </Box>
        <Box style={styles.nameContainer}>
          <Text color="secondary" variant="body">
            {character}
          </Text>
        </Box>
        <Box style={styles.buttonContainer}>
          <CharacterButtons index={index} />
        </Box>
      </Box>
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
  image: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
});
