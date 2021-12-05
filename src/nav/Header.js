import React from "react";
import { NavButton, TopBar, HeaderTitle, NavIcon } from "../../styles";
import { firebase } from "../firebase/config";

const auth = firebase.auth();

export default function Header(props) {
  const logOut = async () => {
    try {
      await auth.signOut();
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TopBar>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.goBack()}
      >
        <NavIcon source={require("../../assets/icons/previous.png")} />
      </NavButton>
      <HeaderTitle>{props.route.name}</HeaderTitle>
      {/* <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/account.png")} />
      </NavButton> */}

      {/* temporary logout  */}
      <NavButton style={{ backgroundColor: "transparent" }} onPress={logOut}>
        <NavIcon source={require("../../assets/icons/account.png")} />
      </NavButton>
    </TopBar>
  );
}
