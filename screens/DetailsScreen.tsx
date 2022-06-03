import React from "react";
import { StyleSheet, View, Image, ScrollView, Button } from "react-native";
import { RootStackScreenProps } from "../types";
import Box from "../components/styled/Box";
import Text from "../components/styled/Text";

export default function DetailsScreen({
  route,
  navigation,
}: RootStackScreenProps<"Details">) {
  return (
    <Box
      backgroundColor="background"
      style={styles.container}
    >
      <ScrollView>
        <Box
          margin="s"
          style={{ alignItems: "center" }}
        >
          <Image source={{ uri: route.params.image }} style={styles.image} />
        </Box>
        <Box
          padding="s"
          style={styles.titleContainer}
        >
          <Text color="primary" variant="header" style={{textAlign: "center"}}>
            {route.params.character}
          </Text>
          <Text color="secondary" variant="subHeader">
            {route.params.characterDirection}
          </Text>
        </Box>
        <Box margin="s" padding="l">
          <Text color="primary" variant="body">
            {route.params.quote}
          </Text>
        </Box>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
});
