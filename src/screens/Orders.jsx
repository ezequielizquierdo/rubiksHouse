import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from "../data/orders.json"
import OrderItem from '../components/OrderItem'


const Orders = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(order) => order.id}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})