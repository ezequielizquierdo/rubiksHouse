import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";
import { colors } from "../global/colors";

export default function ProductItem({ product, navigation }) {

  const [isPortrait, setIsPortrait] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (height > width) {
      setIsPortrait(true);
      setIsLandscape(false);
    } else {
      setIsPortrait(false);
      setIsLandscape(true);
    }
  }, [width, height]);

  return (
    <Pressable
    //  style={styles.card} 
     onPress={() => navigation.navigate("ItemDetail", { id: product.id })}>
      <Card
      style={styles.cardContainer}
      >
        <Text style={width < 350 ? styles.textMin : styles.text}>{product.title}</Text>
        <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: product.thumbnail }}
          />
      </Card>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  // card: {
  //   height: 100,
  //   padding: 20,
  //   margin: 15,
  //   borderWidth: 2,
  //   borderRadius: 10,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   gap: 4
  // },
  image: {
    minHeight: 90,
    minWidth: 90,
    width: "30%",
    borderRadius: 5,
  },
  text: {
    width: "70%",
    fontFamily: "InterRegular",
    fontSize: 20,
  },
  textMin: {
    width: "70%",
    fontFamily: "InterRegular",
    fontSize: 15,
  },
  cardContainer: {
    // marginHorizontal: 50,
    marginVertical: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.rubik_cream_violet,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // opacity: 0.5
  },
});

      // style={{
      //   marginVertical: 20,
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      // }}