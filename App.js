import React from "react";
import { Auth } from "./src/nav/Auth";
import UserState from "./src/nav/UserState";

export default function App() {
  return (
    <Auth>
      <UserState />
    </Auth>
  );
}
