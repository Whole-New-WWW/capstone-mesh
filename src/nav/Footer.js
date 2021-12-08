import React from "react";
import { BottomBar, NavIcon, FooterIcon, NavButton } from "../../styles";
import SOSButton from '../screens/Dashboard/SOS'
import { useNavigation } from '@react-navigation/native';

export default function Footer(props) {
  const navigation = useNavigation();
  console.log('FOOTER >>>', props)

  return (
    <BottomBar>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/home.png")} />
      </NavButton>
      <FooterIcon onPress={() => navigation.navigate("SOS")}>
        <NavIcon source={require("../../assets/icons/alert.png")} />
      </FooterIcon>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => navigation.navigate("Safety Nets")}
      >
        <NavIcon source={require("../../assets/icons/map.png")} />
      </NavButton>
    </BottomBar>
  );
}
