import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { firebase } from "./src/firebase/config";
import { NavigationContainer } from "@react-navigation/native";
import User from "./src/nav/User";
import Guest from "./src/nav/Guest";
import { decode, encode } from "base-64";
import { Clipboard } from 'react-native'
import { Auth } from "./src/nav/Auth";
import UserState from "./src/nav/UserState";

// HACK: Prevent "Expo pasted from CoreSimulator" notification from spamming continuously
Clipboard.setString('')


if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return (
    <Auth>
      <UserState />
    </Auth>
  );
}
