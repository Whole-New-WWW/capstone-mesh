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
        provider={PROVIDER_GOOGLE} //import the google provider
        showsUserLocation //={true} //allows to see your current location displayed on the map
        initialRegion={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421}}
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
