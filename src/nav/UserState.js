import "react-native-gesture-handler";
import React, { useEffect, useState, useContext } from "react";
import { firebase } from "../firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import Guest from "./Guest";
import User from "./User";
import { AuthContext } from "./Auth";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function UserState() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  console.log('in the userstate', user)

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    <NavigationContainer>
      {user ? <User /> : <Guest />}
    </NavigationContainer>
  );
}
