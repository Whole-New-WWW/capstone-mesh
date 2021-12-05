import * as React from "react";
import * as Location from 'expo-location' //using expo to get the location of user
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { Container } from "../../../styles";
import Header from '../../nav/Header';
import { Alert } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//placeholder until we are able to get the users current location
// const region = {
//   //default from expo:
//   latitude: 37.78825,
//   longitude: -122.4324,
//   latitudeDelta: 0.10,
//   longitudeDelta: 0.04
// }

//new code:
const Map = (props) => {
    const [location, setLocation] = React.useState(null)
    const [initialRegion, setInitialRegion] = React.useState(null)
    const [error, setError] = React.useState(null)
    console.log('this is a map from the viewer')
    //fetches user location latitude and longitude and then pass to coordinate prop of Marker component
    React.useEffect(() => {
      (async () =>{
        let { status } = await Location.requestPermissionsAsync(); //Asks the user to grant permissions for location
        if(status != 'granted'){
          setError('Permission to access location was denied');
          return;
        }
        const locate = await Location.getCurrentPositionAsync({}); //gets the user most recent location, faster than getCurrentPositionAsync getLastKnownPositionAsync
        
        //sets the initial lat and long coordinates
        setInitialRegion({
          latitude: locate.coords.latitude,
          longitude: locate.coords.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.03
        })

        setLocation({
          latitude: locate.coords.latitude,
          longitude: locate.coords.longitude,
        })

        console.log('in locate', locate.coords)
      })()
    }, []);

    return (
      <View>
        {/* <Container> */}
        <Header {...props} />

        <GooglePlacesAutocomplete
        
        placeholder="Where to?"
        query={{
          key: 'AIzaSyDpSBACR8eeqYjsNMAjD04yTeEoxMVKU38',
          language: 'en', // language of the results
        }}
        //Use details to get the coordinates of places using place_id 
        onPress={(data, details) => {
          
          console.log(data)
          console.log('DETAILS to get place_ID', details)
          
          }}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
        />
        

      {/* <Text style={styles.heading}>Current Location</Text> */}
      {location ? 
      <MapView initialRegion={initialRegion} 
                provider={PROVIDER_GOOGLE} 
                style={styles.map} 
                zoomEnabled={true}>

          <Marker coordinate={location} 
                  title="My Current location">
          </Marker> 

      </MapView>
      :<Text>loading coords</Text>
      }

      
      {/* </Container> */}
    </View>
  );
};
export default Map;




// export default function Map(props) {
//   return (
//     <Container>
//       <Header {...props} />

//       <GooglePlacesAutocomplete 
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyDpSBACR8eeqYjsNMAjD04yTeEoxMVKU38',
//         language: 'en',
//       }}
//       />

//       <MapView
//         style={{ height: "80%", width: "100%" }}
//         provider={PROVIDER_GOOGLE} //import the google provider
//         // ref={map => this._map = map} //might need to change name here, associated with the geolocation
//         showsUserLocation={true} //allows to see your current location displayed on the map
//         showsMyLocationButton
//         zoomEnabled={true}
//         initialRegion={region}
//         //placeholder={'Search'}
//         placeholderTextColor={'#666'}
//       />
      
//       <StatusBar style="auto" />
//     </Container>
//   );
// }
// //react-native-permissions insert below




//styling below:
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  map: {
    //height: "80%", width: "100%" 
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
    
  },
});
