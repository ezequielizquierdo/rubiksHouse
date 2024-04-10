import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";


export default function CategoryItem({ category, navigation }) {
  const dispatch = useDispatch()

  return (
    <View >
      <Pressable
        onPress={() => {
          dispatch(setCategorySelected(category))
          navigation.navigate("ItemListCategories", { category });
        }}
      >
        <Card style={styles.cardContainer}>
          <Text style={styles.text}>{category}</Text>
        </Card>

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    // fontFamily: "InterBold",
    // fontFamily: "PeaEllieBellie",
    textAlign: "center",
    // color: "white",
    // justifyContent: "center"
  },
  cardContainer: {
    marginHorizontal: 50,
    marginVertical: 50,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.rubik_cream_violet,
    borderRadius: 10,
    // opacity: 0.5
  },
  pressable: {
    backgroundColor: colors.blue_200,
  },
  imageBackground: {
    width: "100%",
    height: "100"
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  // Para que la imagen se ajuste al tamaño del contenedor
    justifyContent: 'center',  // Ajusta la alineación vertical si es necesario
    alignItems: 'center',  // Ajusta la alineación horizontal si es necesario
    opacity: 0.5
  },
});