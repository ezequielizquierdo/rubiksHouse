import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";
import { colors } from "../global/colors";


export default function Categories({ navigation }) {

  // const categories = useSelector((state) => state.shopReducer.value.categories);

  const { data, isLoading, error } = useGetCategoriesQuery();
  console.log("data useGetCategoriesQuery ->", data)

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.rubik_cream_light,

  },
  titleText: {
    fontFamily: "PeaEllieBellie",
    fontSize: 12,
    color: "black",
    paddingVertical: 4,
    textAlign: "center"
  },
})