import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allProducts from "../data/products.json"
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";


export default function ItemListCategories({ navigation, route }){
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

  console.log("keyword", keyword)
  useEffect(() => {
    if (category) {
      const filteredProducts = allProducts.filter((product) => {
        return product.category === category
      })

      const finalFilteredProducts = filteredProducts.filter((product) => product.title.includes(keyword));

      setProducts(finalFilteredProducts)
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }

  }, [category, keyword])

  console.log("products", products)

  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
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