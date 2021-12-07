import * as React from "react";
import * as Location from "expo-location"; //using expo to get the location of user
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { Container } from "../../../styles";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";
import { Alert } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; //to get search bar to autopopulate
import MapViewDirections from "react-native-maps-directions"; //to connect the two markers to get directions (origin and destination)
import { useRef } from "react"; //allows to access DOM element

//used hooks useState and useEffect
//useState: allows you to add state to functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components
//useEffect: you tell React that your component needs to do something after render. React remembers the function passed as (useEffect)

//will change the placement of the api key when closer to deployment
const API_KEY = "AIzaSyDpSBACR8eeqYjsNMAjD04yTeEoxMVKU38";

const Map = (props) => {
  const mapRef = useRef(null); //allows us to access a DOM element imperatively (document object Model = DOM)

  //state variables
  const [location, setLocation] = React.useState(null);
  const [initialRegion, setInitialRegion] = React.useState(null);
  const [searchedPlace, setSearchedPlace] = React.useState(null);
  const [error, setError] = React.useState(null);
  //fetches user location latitude and longitude and then pass to coordinate prop of Marker component
  React.useEffect(() => {
    //async function used to get request permission of users location while getting their current position
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); //Asks the user to grant permissions for location
      if (status != "granted") {
        setError("Permission to access location was denied");
        return;
      }
      const locate = await Location.getCurrentPositionAsync({}); //gets the user most recent location, faster than getCurrentPositionAsync getLastKnownPositionAsync
      //sets the initial lat and long coordinates
      setInitialRegion({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.04,
      });
      //gets the current user coordinates
      setLocation({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      });
      console.log("in locate", locate.coords);
    })();
  }, []);
  return (
    <View>
      <Container>
        <Header {...props} />
        <GooglePlacesAutocomplete
          style={{ position: "absolute" }}
          placeholder="Where to?"
          query={{
            key: API_KEY,
            language: "en", // language english
          }}
          //Use details to get the coordinates of places using place_id
          onPress={(data, details) => {
            //console.log(data)
            console.log("DETAILS to get place_ID", details);
            //this gets the coordinates of the searched location
            console.log(
              "SEARCHED geometry coordinates using fetchDetails",
              details.geometry.location
            );
            //gets the search coordinates
            //comes from the GooglePlacesAutocomplete details and enabled fetchDetails (true) to get the coordinates
            const searchLocation = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            };
            const initialLocation = {
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            };
            setSearchedPlace(searchLocation);
            console.log("AFTER setSearch", searchLocation);
            //map styling for both markers to appear
            const padding_value = 80;
            mapRef.current.fitToCoordinates([searchLocation, initialLocation], {
              edgePadding: {
                top: padding_value,
                right: padding_value,
                bottom: padding_value,
                left: padding_value,
              },
              animated: true,
            });
            console.log("Made it past fit to coordinates");
          }}
          //fetchDetails to true to get the geometry of the location
          fetchDetails={true}
          onFail={(error) => console.error(error)}
          requestUrl={{
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
            useOnPlatform: "web",
          }} // this in only required for use on the web. See https://git.io/JflFv more for details.
        />
        {location ? (
          <MapView
            ref={mapRef}
            initialRegion={initialRegion}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled={true}
          >
            <Marker coordinate={location} title="Current Location"></Marker>
            {searchedPlace ? (
              <Marker
                coordinate={searchedPlace}
                title="Desired Location"
              ></Marker>
            ) : null}
            {location && searchedPlace ? (
              <MapViewDirections
                origin={location}
                destination={searchedPlace}
                apikey={API_KEY}
                strokeWidth={4}
                strokeColor="purple"
              />
            ) : null}
          </MapView>
        ) : (
          <Text>loading coords</Text>
        )}
        {/* <Footer {...props} /> */}
      </Container>
    </View>
  );
};
export default Map;
//styling below:
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
});
