import React from "react";
import { NavButton, TopBar, HeaderTitle, NavIcon } from "../../styles";

export default function Header(props) {
  return (
    <TopBar style={{ height: 200 }}>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.goBack()}
      >
        <NavIcon source={require("../../assets/icons/previous.png")} />
      </NavButton>
      <HeaderTitle>{props.route.name}</HeaderTitle>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Account")}
      >
        <NavIcon source={require("../../assets/icons/account.png")} />
      </NavButton>
    </TopBar>
  );
}
