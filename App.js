import React from 'react';
import "react-native-gesture-handler";
import { decode, encode } from "base-64";
import { Auth } from "./src/nav/Auth";
import UserState from "./src/nav/UserState";


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
