import { StyleSheet, Text } from "react-native";
import Card from "./Card";

export default function ProductDescription({product}) {
  return (
    <Card style={{marginVertical: 20}}>
      <Text style={styles.text}>{product.description}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    // textAlign: "center"
  },
});