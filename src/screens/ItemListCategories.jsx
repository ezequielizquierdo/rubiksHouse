import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allProducts from "../data/products.json"
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";
import { colors } from "../global/colors";


export default function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("");

  const category = useSelector((state) => state.shopReducer.value.categorySelected);
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)

  useEffect(() => {
    console.log("productsFilteredByCategory", productsFilteredByCategory)

    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory)
      const productsFiltered = productsRaw.filter((product) =>
        product.title.includes(keyword))
      setProducts(productsFiltered)
    }

  }, [productsFilteredByCategory, keyword])


  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      {/* <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text>
      <Text>Prueba de scroll</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.rubik_cream_light,
  },
});