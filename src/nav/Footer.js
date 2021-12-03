import React from "react";
import { BottomBar, NavIcon, FooterIcon } from "../../styles";

export default function Header(props) {
  return (
    <BottomBar>
      <FooterIcon
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/home.png")} />
      </FooterIcon>
      <FooterIcon
        onPress={() => props.navigation.navigate("Map")}
      >
        <NavIcon source={require("../../assets/icons/alert.png")} />
      </FooterIcon>
      <FooterIcon
        onPress={() => props.navigation.navigate("Map")}
      >
        <NavIcon source={require("../../assets/icons/map.png")} />
      </FooterIcon>
    </BottomBar>
  );
}
