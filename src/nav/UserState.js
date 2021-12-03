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

// Firebase Auth
const auth = firebase.auth();

export default function UserState() {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    auth.onAuthStateChanged((user) => {
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

  // useEffect(() => {
  //   // onAuthStateChanged returns an unsubscriber
  //   const logged = auth.onAuthStateChanged(async (authUser) => {
  //     try {
  //       await (authUser ? setUser(authUser) : setUser(null));
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  //   // unsubscribe auth listener on unmount
  //   return logged;
  // }, []);

  if (loading) {
    return <></>;
  } else {
    return (
      <NavigationContainer>{user ? <User /> : <Guest />}</NavigationContainer>
    );
  }
}
