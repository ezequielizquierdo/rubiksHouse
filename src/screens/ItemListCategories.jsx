import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allProducts from "../data/products.json"
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";


export default function ItemListCategories({ navigation }) {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("");
  const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory)

  useEffect(() => {
    const productsFiltered = productsFilteredByCategory.filter((product) =>
      product.title.includes(keyword))
    setProducts(productsFiltered)

  }, [productsFilteredByCategory, keyword])

  console.log("PRODUCTS -->", products)

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      <Text>Info</Text>
      <Text>Info</Text>
      <Text>Info</Text>
      <Text>Info</Text>
      <Text>Info</Text>

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
  },
});