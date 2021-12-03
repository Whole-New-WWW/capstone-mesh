import * as React from "react";
import MapView, { Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
// import Geolocation from '@react-native-community/geolocation'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions } from "react-native";
import { Container } from "../../../styles";
import Header from '../../nav/Header';
import { Alert } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//placeholder until we are able to get the users current location
const region = {
  // //new york lat and long:
  // latitude: 40.7143,
  // longitude: -74.0042,
  // latitudeDelta: 0.09,
  // longitudeDelta: 0.035

  //default from expo:
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.10,
  longitudeDelta: 0.04
}

export default function Map(props) {
  return (
    <Container>
      <Header {...props} />
      <GooglePlacesAutocomplete 
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDpSBACR8eeqYjsNMAjD04yTeEoxMVKU38',
        language: 'en',
      }}
      />

      <MapView
        style={{ height: "80%", width: "100%" }}
        provider={PROVIDER_GOOGLE} //import the google provider
        // ref={map => this._map = map} //might need to change name here, associated with the geolocation
        showsUserLocation //={true} //allows to see your current location displayed on the map
        showsMyLocationButton
        initialRegion={region}
        //placeholder={'Search'}
        placeholderTextColor={'#666'}
      />
      
      <StatusBar style="auto" />
    </Container>
  );
}
//react-native-permissions insert below


//below gets the users current location
// const locateCurrentPosition = () => {
//   Geolocation.getCurrentPosition(
//     position => {
//       //to view an object as a string 
//       console.log(JSON.stringify(position));

//       let initialPosition = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }

//       this.setState({initialPosition});
//     },
//     error => Alert.alert(error.message),
//     {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
//   )
// }

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
