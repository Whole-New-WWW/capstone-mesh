import React from "react";
import { firebase } from "../../firebase/config";
import { Linking, Text } from "react-native";
import {
  Title,
  Grid,
  Icon,
  DashButton,
  DashContainer,
  DashText,
  SOS
} from "../../../styles";
import Footer from "../../nav/Footer";

export default function Dashboard(props) {
  console.log("in the dashboard", props);

  return (
    <>
      <DashContainer>
        <Title>Welcome home</Title>
        <Grid>
          <DashButton onPress={() => props.navigation.navigate("Map")}>
            <DashText>Map</DashText>
            <Icon source={require("../../../assets/icons/map.png")} />
          </DashButton>
          <DashButton onPress={() => props.navigation.navigate("Map")}>
            <DashText>Safety Net</DashText>
            <Icon source={require("../../../assets/icons/friends.png")} />
          </DashButton>
          <DashButton onPress={() => Linking.openURL("http://google.com")}>
            <DashText>Reports</DashText>
            <Icon source={require("../../../assets/icons/reports.png")} />
          </DashButton>
          <DashButton onPress={() => Linking.openURL("http://google.com")}>
            <DashText>Submit a Report</DashText>
            <Icon source={require("../../../assets/icons/addreport.png")} />
          </DashButton>
          <DashButton onPress={() => Linking.openURL("http://google.com")}>
            <DashText>Past Routes</DashText>
            <Icon source={require("../../../assets/icons/history.png")} />
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
