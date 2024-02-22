import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";

export default function Footer() {
  return (
    <View style={styles.container}>
        <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: colors.blue_300,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  image: {
    width: 70,
    height: 70
  },
});