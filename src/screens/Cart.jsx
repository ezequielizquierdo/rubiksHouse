import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import allCartItems from "../data/cart.json"
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

const Cart = () => {
  // const [cartItems, setCartItems] = useState([])
  // const [total, setTotal] = useState(0)

  const cartItems = useSelector((state) => state.cartReducer.value.items);
  const total = useSelector((state) => state.cartReducer.value.total);
  const [triggerPost, result] = usePostOrderMutation()

  // useEffect(() => {
  //   const total = allCartItems.reduce((acc, currentItem) => 
  //     acc += (currentItem.quantity * currentItem.price), 0)
  //   setCartItems(allCartItems)
  //   setTotal(total)
  //   console.log("total", total)
  // }, [])
  const confirmCart = ()=> {
    triggerPost({ total, cartItems, user: "loggedUser"}) // Harcodeo el usuario
  }
  return (
    <View>
      {
        cartItems.length > 0 ?
          (
            <>
              <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(cartItems) => cartItems.id}
              />
              <Text> Total: $ {total}</Text>
              <Pressable onPress={confirmCart}>
                <Text>Confirmar</Text>
              </Pressable>
            </>

          ) :
          <Text>No hay productos en el carrito</Text>

      }

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})