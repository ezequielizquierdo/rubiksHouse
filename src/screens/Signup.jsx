import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";


const Signup = ({navigation}) => {
  // estado del email
  const [email, setEmail] = useState("");
  // estado para error de email
  const [errorMail, setErrorMail] = useState("");
  // estado para la contrsaseña
  const [password, setPassword] = useState("");
  // estado para error de contrsaseña
  const [errorPassword, setErrorPassword] = useState("");
  // estado para confirmar contrsaseña
  const [confirmPassword, setConfirmPassword] = useState("");
  // estado para error de confirmación de contrsaseña
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // 
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  //console.log(result)

  const onSubmit = () => {
    console.log("mail", errorMail);
    console.log("password", errorPassword);
    console.log("confirmPassword", errorConfirmPassword);

    try {
      //limpiamos los errores cada vez que ejecutamos el Register
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });

      triggerSignup({ email, password });
      console.log("Registro exitoso");
    } catch (err) {
      console.log("path", err.path);
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  // Si result.data es true
  useEffect(() => {
    if (result.data) {
      // Le paso result a setUser
      dispatch(setUser(result));
    }
  }, [result]);

  return (
    <View>
      <Text>Registrate</Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <InputForm
        label={"Confirm password"}
        error={errorConfirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
      />
         <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Ir al login</Text>
      </Pressable>
      <SubmitButton title={"Registrate"} onPress={onSubmit} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});