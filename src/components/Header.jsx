import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../global/colors";
import Constants from "expo-constants";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} src={"https://images.ctfassets.net/r3qu44etwf9a/22WJhewcLVQ4P36RbBobeo/c7bb6fe9211b6a998b250661b9863f6d/rubiks-logo.png?w=600&h=223&q=50&fm=png"} /> */}
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   // backgroundColor: colors.blue_300,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   paddingTop: Constants.statusBarHeight,
  //   height: 160
  // },
  container: {
    height: 200,
    width: "100%",
    backgroundColor: colors.blue_300,
    justifyContent: "center",
    alignItems: "center",
  paddingTop: Constants.statusBarHeight,

  },
  image: {
    width: "45%",
    height: "60%"
  },
  text: {
    fontFamily: "InterExtraBold",
    fontSize: 20,
  }
});