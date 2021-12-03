import React from "react";
import { Button, TopBar, Title, NavIcon } from "../../styles";

export default function Header(props) {
  return (
    <TopBar>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.goBack()}
      >
        <NavIcon source={require("../../assets/icons/previous.png")} />
      </Button>
      <Title>{props.route.name}</Title>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/account.png")} />
      </Button>
    </TopBar>
  );
}
