import { useEffect, useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from "../global/colors";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()

  const confirmCart = () => {
    triggerPost({ total, cartItems, user: "loggedUser" })
  }

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(cartItem) => cartItem.id}
          />
          <Text>Total: ${total}</Text>
          <Pressable style={styles.confirm} onPress={confirmCart}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
        </>
      ) : (
        <Text>No hay productos agregados</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.rubik_cream_light,
  },
  confirm: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.blue_300,
  },
  confirmText: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "white",
  },
});