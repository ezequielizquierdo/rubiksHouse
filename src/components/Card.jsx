import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Card({ children, style }) {
  return (
    <View style={{ ...styles.container, ...style }}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
});