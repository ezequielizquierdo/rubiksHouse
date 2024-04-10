import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { colors } from "../global/colors";
import MapPreview from "../components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";

const LocationSelector = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" }); // Iniciamos el estado de la ubicación en string vacio
  const [error, setError] = useState(null); // Estado por si hay un error
  const [address, setAddress] = useState(null); // Seteo la dirección
  const { localId } = useSelector((state) => state.authReducer.value); // Traigo el estado localId con useSelector
  const [triggerPostAddress, result] = usePostUserLocationMutation();

  // API Key Map -> AIzaSyDITRUiGpT9H1h12naSE__vvUUQH1oBp5I

  const dispatch = useDispatch();

  // Ejecuto al montar el componente para acceder a la ubicación
  useEffect(() => {
    (async () => { // función asincrono para obtener la ubicación
      let { status } = await Location.requestForegroundPermissionsAsync(); 
      if (status !== "granted") { // Si status no fue exitoso, seteo el mensaje de error
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync(); // Si fue exitoso, guardo en location los datos obtenidos de las coordenadas
      setLocation({ // ver los permisos en las config de expo.
        latitude: location.coords.latitude, // guardo latitud
        longitude: location.coords.longitude, // guardo longitud
      });
    })();
  }, []);

  
  // 
  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) { // Si existe location.latitude
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode); // Espera el fetch del llamado de la url
          const data = await response.json(); // Lo guardo en data cuando tenga la response
          setAddress(data.results[0].formatted_address); // Seteo el estado de adress con la direccion
        }
      } catch (err) {}
    })();
  }, [location]); // La dependencia hace que se ejecute cuando se modifique location

  const onConfirmAddress = () => {
    console.log("address en onConfirmAddress: ", address);
    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address: address,
    };
    dispatch(setUserLocation(locationFormatted)); // Le paso locationFormatted a traves de la función setUsetLocation al dispatch para que modifique el estado global

    triggerPostAddress({localId, location: locationFormatted}); // Uso la función triggerPostAddress con los datos de localId y location
  };

  return (
    <View style={styles.container}>
      <Text>Mi ubicación</Text>
      {location.latitude ? (
        <View style={styles.noLocationContainer}>
          <Text>
            Lat: {location.latitude}, long: {location.longitude}
          </Text> 
          <MapPreview location={location} />
          <Text>{address}</Text>
          <Pressable style={styles.button} onPress={onConfirmAddress}>
            <Text style={styles.text}>Confirmar dirección</Text>
          </Pressable>
        </View>
      ) : (
        <Text>{error}</Text> // Ejecuto el error si no se ve la ubicación
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 130,
    paddingTop: 40,
  },
  noLocationContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  address: {
    padding: 10,
    fontFamily: "InterRegular",
    fontSize: 16,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.blue_400,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 18,
    color: "white",
  },
});