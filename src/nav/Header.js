import React from "react";
import { Button, TopBar, Title, TopIcon } from "../../styles";

export default function Header(props) {
  return (
    <TopBar style={{height: 200}}>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.goBack()}
      >
        <TopIcon source={require("../../assets/icons/previous.png")} />
      </Button>
      <Title>{props.route.name}</Title>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <TopIcon source={require("../../assets/icons/account.png")} />
      </Button>
    </TopBar>
  );
}
