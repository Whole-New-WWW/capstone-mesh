import * as React from 'react';
import * as Location from 'expo-location' //to get current location
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const Map = () => {
  const [location, setLocation] = React.useState(null)
  const [error, setError] = React.useState(null)

  //fetches user location latitude and longitude and then pass to coordinate prop of Marker component
  React.useEffect(() => {
    (async () =>{
      let { status } = await Location.requestPermissionsAsync(); //Asks the user to grant permissions for location
      if(status != 'granted'){
        setError('Permission to access location was denied');
        return;
      }
      const locate = await Location.getLastKnownPositionAsync({}); //gets the user most recent location, faster than getCurrentPositionAsync
      setLocation(locate.coords)
    })()
  }, []);

  return (
    <View>
      {/* <Text style={styles.heading}>Current Location</Text> */}
      <MapView style={styles.map} zoomEnabled={true}>
        {location ? (
          <Marker coordinate={location} title="My Current location">
           </Marker> 
        ):
          <Text>{error}</Text>
        }
      </MapView>
    </View>
  );
};
export default Map;

//below is without using expo-location:
// export default function Map() {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={{height: '100%', width: '100%'}} 
//         provider={PROVIDER_GOOGLE} //import the provider google
//         showsUserLocation={true} //allows to see your current location displayed on the map
        
//       />
//       <StatusBar style="auto"/>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});








