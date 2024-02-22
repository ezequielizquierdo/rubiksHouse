import { FlatList, StyleSheet, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

export default function Categories({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem navigation={navigation} category={item} />}
        keyExtractor={(category) => category}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  }
})