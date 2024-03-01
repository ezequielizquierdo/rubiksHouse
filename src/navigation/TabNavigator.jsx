import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from '../navigation/ShopStack'
import CartStack from './CartStack'
import { colors } from '../global/colors'
import { Entypo, AntDesign,FontAwesome } from '@expo/vector-icons';
import OrdersStack from './OrdersStack'


const TabNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    {
                        headerShown: true,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar
                    }
                }>
                <Tab.Screen
                    name='ShopStack'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.tabContainer}>
                                    <Entypo name="shop" size={30} color={focused ? "black" : "grey"} />
                                    <Text>Shop</Text>
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='CartStack'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.tabContainer}>
                                    <AntDesign name="shoppingcart" size={30} color={focused ? "black" : "grey"} />
                                    <Text>Cart</Text>
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='OrdersTab'
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.tabContainer}>
                                    <FontAwesome name="list-ul" size={30} color={focused ? "black" : "grey"} />
                                    <Text>Orders</Text>
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.blue_100,
        height: 100
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})