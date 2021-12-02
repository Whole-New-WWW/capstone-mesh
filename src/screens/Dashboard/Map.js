import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions } from "react-native";
import { Container } from "../../../styles";
import Header from '../../nav/Header';

export default function Map(props) {
  return (
    <Container>
      <Header {...props} />
      <MapView
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE} //import the provider google
        showsUserLocation={true} //allows to see your current location displayed on the map
      />
      <StatusBar style="auto" />
    </Container>
  );
}

//styling below:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
