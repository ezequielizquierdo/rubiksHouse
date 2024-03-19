import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";
import { colors } from "../global/colors";
import { addItem } from "../features/shop/cartSlice";
import { useDispatch } from "react-redux";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  const dispatch = useDispatch()

  const onAddCart = () => {
    // despacho la acción - Harcodeo la cantidad
    dispatch(addItem({...product, quantity: 1}))
  }

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <SafeAreaView style={styles.main}>
      {product ? (
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{ uri: product.images[0] }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textContainer}>
              <Text style={styles.descriptionText}>{product.title}</Text>
              <Text style={styles.descriptionText}>{product.description}</Text>
              <Text style={styles.descriptionTextPrice}>${product.price}</Text>
              <Pressable style={styles.buy} onPress={onAddCart}>
                <Text style={styles.buyText}>Agregar al carrito</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 400,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
  },
  descriptionText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: "black",
    paddingVertical: 4,
  },
  descriptionTextPrice: {
    fontFamily: "InterRegular",
    fontSize: 25,
    color: "black",
    paddingVertical: 6,
  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.blue_300,
  },
  buyText: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "white",
  },
});