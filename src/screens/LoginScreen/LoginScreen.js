import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import { firebase } from "../../firebase/config";

// Firebase Auth
const auth = firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  const onLoginPress = () => {
    try {
      if (email && password) {
        auth.signInWithEmailAndPassword(email, password);
        navigation.navigate("Dashboard");
      } else {
        alert("Please fill in your information!");
      }
    } catch (e) {
      alert(e);
    }
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const usersRef = firebase.firestore().collection("users");
    //     usersRef
    //       .doc(uid)
    //       .get()
    //       .then((firestoreDocument) => {
    //         if (!firestoreDocument.exists) {
    //           alert("User does not exist anymore.");
    //           return;
    //         }
    //         navigation.navigate("Dashboard");
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  return (
    <DashContainer>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%", marginTop: 25 }}
        keyboardShouldPersistTaps="always"
      >
        <Title>Log In</Title>
        <Logo source={require("../../../assets/globe-logo.png")} />
        <TextInput
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button onPress={() => onLoginPress()}>
          <ButtonText>Log In</ButtonText>
        </Button>
        <FooterView>
          <Text>
            Don't have an account?{" "}
            <FooterLink onPress={onFooterLinkPress}>Sign up</FooterLink>
          </Text>
        </FooterView>
      </KeyboardAwareScrollView>
    </DashContainer>
  );
}
