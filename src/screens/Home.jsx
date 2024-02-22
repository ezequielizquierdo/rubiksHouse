import { View, StyleSheet } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Categories navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
});