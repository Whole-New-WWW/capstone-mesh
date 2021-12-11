import * as React from 'react'
import * as Location from 'expo-location' //using expo to get the location of user
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps'
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { Container, Colors, MapInstruction } from '../../../styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete' //to get search bar to autopopulate
import MapViewDirections from 'react-native-maps-directions' //to connect the two markers to get directions (origin and destination)
import { useRef } from 'react' //allows to access DOM element
import { getDistance } from 'geolib' //calculates the distance
import CrimeHeatMap from './CrimeHeatMap'
import mapSMS from './MapNotifications'
import { AuthContext } from '../../auth/Auth'
import { API_KEY } from '../../../secrets' // import your unique Google Maps API key in secrets.js file

// Color imports
const { navy, lavender, yellow } = Colors

//Distance check for notifications
const ARRIVED = 20

const Map = (props) => {
  const mapRef = useRef(null) //allows us to access a document object Model (DOM) element imperatively

  //state variables
  const [location, setLocation] = React.useState(null)
  const [initialRegion, setInitialRegion] = React.useState(null)
  const [searchedPlace, setSearchedPlace] = React.useState(null)
  const [showHeatmap, setHeatmap] = React.useState(false)
  const [showInstruction, setInstruction] = React.useState(false)
  const [error, setError] = React.useState(null)
  const { user } = React.useContext(AuthContext)
  const userID = user.id
  //fetches user location latitude and longitude and then pass to coordinate prop of Marker component
  React.useEffect(() => {
    //async function used to get request permission of users location while getting their current position
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync() //Asks the user to grant permissions for location
      if (status != 'granted') {
        setError('Permission to access location was denied')
        return
      }
      const locate = await Location.getCurrentPositionAsync({}) //gets the user most recent location, faster than getCurrentPositionAsync getLastKnownPositionAsync
      //sets the initial lat and long coordinates
      setInitialRegion({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.04,
      })
      //gets the current user coordinates
      setLocation({
        latitude: locate.coords.latitude,
        longitude: locate.coords.longitude,
      })
    })()
  }, [])

  //------------------------------
  //Watch Position: Triggers Location.watchPositionAsync once On My Way button is clicked

  const watch = async () => {
    alert('Your Safety Net will be notified when you arrive safely. 🙌')
    const locSub = await Location.watchPositionAsync(
      {
        accuracy: 5,
        distanceInterval: 3, //meters
        // timeInterval: 10000 //milliseconds
      },
      (current) => {
        //calculating the users distance from the searched place
        const distance = getDistance(
          {
            latitude: current.coords.latitude,
            longitude: current.coords.longitude,
          },
          {
            latitude: searchedPlace.latitude,
            longitude: searchedPlace.longitude,
          },
        )

        //if distance is less than...send notification
        if (distance <= ARRIVED) {
          mapSMS(userID)
          locSub.remove()
          //console.log("User has ARRIVED to destination") // send push notification to safety net and user to confirm
        } else {
          console.log('User is still on the way to destination')
        }
      },
    )
  }
  //--------------------------------------

  return (
    <Container>
      {showInstruction ? (
        <MapInstruction>
          <Text>
            <Text style={{ fontWeight: 'bold' }}>How to Use the Map</Text>
            {'\n'}
            🏁 Start your trip by typing in your destination.{'\n'}
            👋 Notify your Safety Nets with the 'On my Way' button.{'\n'}
            🚨 View heatmap data on criminal incidents, so you can choose the
            safest route for you.
          </Text>
        </MapInstruction>
      ) : (
        <></>
      )}
      <GooglePlacesAutocomplete
        style={styles.search}
        placeholder="Where to?"
        query={{
          key: API_KEY,
          language: 'en', // language english
        }}
        //Use details to get the coordinates of places using place_id
        onPress={(data, details) => {
          //this gets the coordinates of the searched location
          console.log(
            'SEARCHED geometry coordinates using fetchDetails',
            details.geometry.location,
          )
          //gets the search coordinates
          //comes from the GooglePlacesAutocomplete details and enabled fetchDetails (true) to get the coordinates
          const searchLocation = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          }
          const initialLocation = {
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }
          setSearchedPlace(searchLocation)
          console.log('AFTER setSearch', searchLocation)

          //map styling for both markers to appear
          const padding_value = 80
          mapRef.current.fitToCoordinates([searchLocation, initialLocation], {
            edgePadding: {
              top: padding_value,
              right: padding_value,
              bottom: padding_value,
              left: padding_value,
            },
            animated: true,
          })
          console.log('Made it past fit to coordinates')
        }}
        //fetchDetails to true to get the geometry of the location
        fetchDetails={true}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
      />

      {location ? (
        <>
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
            {/* Change heat map/crime data display based on level of zoom */}
            {showHeatmap ? <CrimeHeatMap /> : <></>}
            {location && searchedPlace ? (
              <MapViewDirections
                origin={location}
                destination={searchedPlace}
                apikey={API_KEY}
                strokeWidth={5}
                strokeColor="purple"
              />
            ) : null}
          </MapView>

          {/* All the Map Buttons */}
          <View>
            {/* Heatmap Button */}
            {!showHeatmap ? (
              <TouchableOpacity
                style={[styles.localCrimes, styles.center]}
                onPress={() => {
                  setHeatmap(true)
                }}
              >
                <Text style={[styles.text]}>View Heatmap</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.localCrimes, styles.center]}
                onPress={() => {
                  setHeatmap(false)
                }}
              >
                <Text style={[styles.text]}>Hide Heatmap</Text>
              </TouchableOpacity>
            )}

            {/* On my Way Button */}
            {!searchedPlace ? (
              <TouchableOpacity
                style={[styles.confirmButton, styles.center]}
                onPress={() => alert('Please enter a location first! 🏁')}
              >
                <Text style={[styles.text]}>On My Way</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.confirmButton, styles.center]}
                onPress={watch}
              >
                <Text style={[styles.text]}>On My Way</Text>
              </TouchableOpacity>
            )}

            {/* View Instructions Button */}
            {!showInstruction ? (
              <TouchableOpacity
                style={[styles.instruction, styles.center]}
                onPress={() => {
                  setInstruction(true)
                }}
              >
                <Text style={[styles.text]}>How-To</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.instruction, styles.center]}
                onPress={() => {
                  setInstruction(false)
                }}
              >
                <Text style={[styles.text]}>Hide How-To</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <Text
          style={{
            fontSize: 20,
            position: 'absolute',
            top: `20%`,
            left: `25%`,
          }}
        >
          Loading Map View... ⏳
        </Text>
      )}
    </Container>
  )
}
export default Map

//styling below:
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  search: {
    position: 'absolute',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
  },
  localCrimes: {
    zIndex: -1,
    width: 140,
    height: 45,
    borderRadius: 50,
    backgroundColor: lavender,
    position: 'absolute',
    bottom: 240,
    right: 10,
  },
  confirmButton: {
    zIndex: -1,
    width: 140,
    height: 45,
    borderRadius: 50,
    backgroundColor: yellow,
    position: 'absolute',
    bottom: 300,
    right: 10,
  },
  instruction: {
    zIndex: -1,
    width: 140,
    height: 45,
    borderRadius: 50,
    backgroundColor: lavender,
    position: 'absolute',
    bottom: 360,
    right: 10,
    fontFamily: 'Manrope',
  },
  text: {
    fontSize: 15,
    color: navy,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  showMap: {
    display: 'none',
  },
})
