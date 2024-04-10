import { View, StyleSheet, Pressable, Image } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Constants from "expo-constants";
import { deleteSession } from "../db";

export default function Header({ title }) {
  const { localId, user } = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
    console.log("deletedSession", deletedSession)
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/rubikshouselogo.png')} style={styles.image} />
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    height: 150,
    width: "100%",
    // backgroundColor: colors.rubik_cream_blue,
    backgroundColor: colors.rubik_cream_light,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: "50%",
    height: "60%"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontFamily: "InterExtraBold",
    fontSize: 20,
  },
  logoutIcon: {
    position: "absolute",
    right: 20,
    paddingTop: Constants.statusBarHeight,
  },
});