import React from "react";
import { BottomBar, NavIcon, FooterIcon, NavButton } from "../../styles";

export default function Footer(props) {
  return (
    <BottomBar>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/home.png")} />
      </NavButton>
      <FooterIcon onPress={() => props.navigation.navigate("Map")}>
        <NavIcon source={require("../../assets/icons/alert.png")} />
      </FooterIcon>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Map")}
      >
        <NavIcon source={require("../../assets/icons/map.png")} />
      </NavButton>
    </BottomBar>
  );
}
