import React, { useState, useEffect } from "react";
import { Linking } from "react-native";
import {
  Title,
  Grid,
  Icon,
  DashButton,
  DashContainer,
  DashText,
  SOS,
} from "../../../styles";
import Footer from "../../nav/Footer";
import { AuthContext } from "../../nav/Auth";

export default function Dashboard(props) {
  let [user] = useState(AuthContext);
  user = user._currentValue.user;
  console.log("DASHBOARD >>>>", user);

  const title = () => {
    if (user) {
      return `Welcome home, ${user.firstName}`;
    } else {
      return `Welcome home`;
    }
  };

  return (
    <>
      <DashContainer>
        <Title>{title()}</Title>
        <Grid>
          <DashButton onPress={() => props.navigation.navigate("Map")}>
            <DashText>Account</DashText>
            <Icon source={require("../../../assets/icons/account.png")} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate("Map")}>
            <DashText>Map</DashText>
            <Icon source={require("../../../assets/icons/map.png")} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate("Safety Nets", {user})}>
            <DashText>Safety Net</DashText>
            <Icon source={require("../../../assets/icons/friends.png")} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate("Time")}>
            <DashText>Submit a Report</DashText>
            <Icon source={require("../../../assets/icons/addreport.png")} />
          </DashButton>
          <SOS onPress={() => Linking.openURL("http://google.com")}>
            <DashText>SOS</DashText>
            <Icon source={require("../../../assets/icons/alert.png")} />
          </SOS>
        </Grid>
      </DashContainer>
      <Footer {...props} />
    </>
  );
}
