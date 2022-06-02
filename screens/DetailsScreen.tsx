import React from "react";
import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import {
  RootStackParamList,
  RootStackScreenProps,
  RootTabScreenProps,
} from "../types";

export default function DetailsScreen({
  route,
  navigation,
}: RootStackScreenProps<"Details">) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: route.params.image }} style={styles.image} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{route.params.character}</Text>
        <Text style={styles.jobText}>{route.params.characterDirection}</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>{route.params.quote}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  imageContainer: {
    width: 200,
    height: 300,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  titleContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
  },
  jobText: {
    fontSize: 24,
    color: "gray",
  },
  aboutContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  aboutText: {
    color: "gray",
    fontSize: 16,
    textAlign: "left"
  },
});
