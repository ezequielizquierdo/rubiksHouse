import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";

export default function Categories({ navigation }) {
  const categories = useSelector((state) => state.shopReducer.value.categories)



  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem navigation={navigation} category={item} />}
        keyExtractor={(category) => category}
      />
      <Counter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  }
})