// this component will render the view of the list of safety nets 
// (group of friends that should be made aware of the user's location)the user is a part of
// upon clicking on the name of the safety net, a single safety net view should render

// import react
import React from 'react';
// import Text and View components 
// Import TouchableOpacity Component for making a view respond to touch (like a button)
import { Text, View, Image, TouchableOpacity } from 'react-native';
// import KeyboardAwareScrollView to make entire screen scrollable and moves contents up if keyboard in use
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator } from '@react-navigation/stack'
import styles from './styles';
import { firebase } from '../../firebase/config';

// declare variable Stack to create an instance of a stack navigator
const Stack = createStackNavigator();

// export default the safety nets functional component that will receive props from navigation
export default function AllSafetyNets(props) {
  return (
    <>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Safety Nets</Text>
        <Image
          style={styles.friendsIcon}
          source={require("../../../assets/icons/friends.png")}
        />
        <View>
          <TouchableOpacity 
            style={styles.button}
          >
            <Text>Dance Team</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
          >
            <Text>Roomies</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
          >
            <Text>Study Group</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
          >
            <Text>Create New Safety Net</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}
