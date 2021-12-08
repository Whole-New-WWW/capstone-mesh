import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../../firebase/config";

import {
  Title,
  Text,
  DashContainer,
  FooterView,
  TextInput,
  Logo,
  Button,
  ButtonText,
  FooterLink,
} from "../../../styles";

// Firebase Auth
const auth = firebase.auth();

export default function RegistrationScreen({ navigation }) {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
          password,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Dashboard", { data });
          })
          .catch((error) => {
            alert("Error!");
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <DashContainer>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%", marginTop: 25 }}
        keyboardShouldPersistTaps="always"
      >
        <Title>Create an Account</Title>
        <Logo source={require("../../../assets/globe-logo.png")} />
        <TextInput
          placeholder="First Name"
          onChangeText={(text) => setfullName(text)}
          value={fullName}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          autoCapitalize="none"
        />
        <Button
          onPress={() => onRegisterPress()}
        >
          <ButtonText>Register</ButtonText>
        </Button>
        <FooterView>
          <Text>
            Already have an account?{' '}
            <FooterLink onPress={onFooterLinkPress}>
              Log in
            </FooterLink>
          </Text>
        </FooterView>
      </KeyboardAwareScrollView>
    </DashContainer>
  );
}
