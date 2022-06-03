import { StyleSheet, View } from "react-native";
import AddButton from "../components/AddButton";
import CharacterList from "../components/CharacterList";
import Box from "../components/styled/Box";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {

  return (
    <Box backgroundColor="background" style={styles.container}>
      <CharacterList />
      <AddButton />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
