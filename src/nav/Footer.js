import React from "react";
import { Button, BottomBar, Title, TopIcon } from "../../styles";

export default function Header(props) {
  return (
    <BottomBar>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Dashboard")}
      >
        <TopIcon source={require("../../assets/icons/home.png")} />
      </Button>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Map")}
      >
        <TopIcon source={require("../../assets/icons/alert.png")} />
      </Button>
      <Button
        style={{ backgroundColor: "transparent" }}
        onPress={() => props.navigation.navigate("Map")}
      >
        <TopIcon source={require("../../assets/icons/map.png")} />
      </Button>
    </BottomBar>
  );
}
