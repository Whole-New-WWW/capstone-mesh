import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, Dashboard} from './src/screens';
import AllSafetyNets from './src/screens/SafetyNets/AllSafetyNets';
import Map from './src/screens/Dashboard/Map'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const usersRef = firebase.firestore().collection("users");
  console.log('in app.js', usersRef)

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection("users");
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data();
  //           setLoading(false);
  //           setUser(userData);
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  // if (loading) {
  //   return <></>;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Dashboard {...props} extraData={user} />}
        </Stack.Screen>
        <Stack.Screen name="All-Safety-Nets">
          {(props) => <AllSafetyNets />}
        </Stack.Screen>
        {/* {user ? (
          <>
            <Stack.Screen name="Home">
              {(props) => <Dashboard {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Map" component={Map} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
