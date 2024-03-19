import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { setProfileImage } from "../features/auth/authSlice";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  // Uso el hook para trer la imagen segun el localId
  const {data, error, isLoading} = useGetProfileImageQuery(localId)
  const dispatch = useDispatch();

  useEffect(()=> {
    // Si data es true
    if(data) {
      console.log(data.image);
      // Modifico el estado de redux, con setProfileImage() pasandole la imagen que viene de data
      dispatch(setProfileImage(data.image))
    }
  }, [data])

  return (
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});