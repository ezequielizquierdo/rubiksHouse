import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from '../navigation/ShopStack'
import CartStack from './CartStack'
import { colors } from '../global/colors'
import { Entypo, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import OrdersStack from './OrdersStack'
import MyProfileStack from './MyProfileStack'


const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
    return (
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
                name='CartTab'
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
           <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color={focused ? "black" : "grey"}
                />
                <Text style={{ color: focused ? "black" : "grey" }}>My profile</Text>
              </View>
            );
          },
        }}
      />
        </Tab.Navigator>
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