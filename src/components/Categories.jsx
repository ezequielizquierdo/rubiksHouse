import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import CategoryItem from "./CategoryItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/shopService";


export default function Categories({ navigation }) {
  // const categories = useSelector((state) => state.shopReducer.value.categories)

  // data -> guarda la información
  // isLoading -> sirve para el efecto de carga
  // error -> 

  const { data, isLoading, error } = useGetCategoriesQuery(); // hook para extraer las categorias desde firebase


  return (
    <View style={styles.container}>
        <Counter />
      <FlatList
        data={data}
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