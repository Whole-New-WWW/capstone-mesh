import React from "react";
import { NavButton, TopBar, HeaderTitle, NavIcon } from "../../styles";
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
  console.log('HEADER >>>', props)
  return (
    <TopBar style={{ height: 200 }}>
      {/* <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.goBack()}
      >
        <NavIcon source={require("../../assets/icons/previous.png")} />
      </NavButton> */}
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
