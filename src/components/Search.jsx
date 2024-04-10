import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import React, { useState } from 'react'
import { Entypo } from "@expo/vector-icons";



export default function Search({ onSearch }) {
  const [input, setInput] = useState("");

  // handleSearch filtra los productos utilizando el valor guardado en "input"
  const handleSearch = () => {
    if (input) {
      onSearch(input);
    }
  };
  //Limpia el campo input
  const removeInput = () => {
    setInput("");
    onSearch(input)
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder='Buscar' />
        <Pressable onPress={handleSearch}>
          <AntDesign name='search1' size={25} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name='circle-with-cross' size={25} color={"black"} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },
  input: {
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    width: "80%",
    fontSize: 20,
  },
});