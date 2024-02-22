import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";


export default function CategoryItem({ category, navigation }) {
  return (
    <View >
      <Pressable style={styles.pressable} onPress={() => navigation.navigate("ItemListCategories", { category })}>
        <Card style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "InterBold",
    textAlign: "center"
  },
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.blue_200,
    borderRadius: 10,
    height: 140
  },
  pressable: {
        backgroundColor: colors.blue_200,

  }
});