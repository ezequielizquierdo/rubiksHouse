import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";


// Hook para la veriricar el permiso de la camara
const ImageSelector = ({ navigation }) => {

  const [image, setImage] = useState(null);
  // Traemos el localId, y traemos de value el localId.
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  // Función para verificar los permisos de la camara
  const verifyCameraPermissions = async () => {
    // Usamos el metodo requestCameraPermissionsAsync del ImagePicker para ver si el permiso fue dado o no.
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    // Si el permiso no fue dado
    if (!granted) {
      return false;
    }
    return true;
  };

// Hook para la selección de la foto
  const pickImage = async () => {
    // Primero verifico si tengo permisos
    const isCameraOk = await verifyCameraPermissions();
    // Si tengo permisos
    if (isCameraOk) {
        // En una variable lanzo el flujo de la camara
      let result = await ImagePicker.launchCameraAsync({
        // Aclaro que tipo de media. 
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // Si es editable la imágen
        allowsEditing: true,
        // Formato de la imágen
        aspect: [9, 16],
        base64: true,
        // Calidad de la imágen
        quality: 1,
      });
// Si no fue cancelado el resultado...
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  // Hook para confirmar la imágen
  const confirmImage = () => {
    dispatch(setCameraImage(image)); // Envio la accion para confirmar la imágen y la guardo con el setCameraImage(image) pasandole la imagen
    triggerSaveProfileImage({ localId, image }); // Ejecuto la funcion, pasandole el localId y la imágen
    navigation.goBack(); // Lo hago ir hacia atras luego de la confirmación
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage}>
            <Text>Tomar otra foto</Text>
          </Pressable>
          <Pressable onPress={confirmImage}>
            <Text>Confirmar foto</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No hay foto disponible</Text>
          <Pressable onPress={pickImage}>
            <Text>Tomar una foto</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});