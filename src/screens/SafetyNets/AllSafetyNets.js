// this component will render the view of the list of safety nets 
// (group of friends that should be made aware of the user's location)the user is a part of
// upon clicking on the name of the safety net, a single safety net view should render

// import react
import React from 'react';
// import Text and View components 
// Import TouchableOpacity Component for making a view respond to touch (like a button)
import { Text, View, Image, TouchableOpacity} from 'react-native';
// import KeyboardAwareScrollView to make entire screen scrollable and moves contents up if keyboard in use
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator } from '@react-navigation/stack'
import styles from './styles';
import { firebase } from '../../firebase/config';

// Importing react native vector icons
  // npm install react-native-elements
    // to access a ui library of styling elements like styled buttons and icons
  // Import SafeAreaProvider from 'react-native-safe-area-context'
    // Wrap entire app inside of this
    // This step is required by react native elements
  // import Icon component from react-native-elements or react-native-vector-icons/the name of the icon set you would like to access
    //react native vector icons are included in react native elements library 
  // A full list of the icon sets can be viewed here: https://reactnativeelements.com/docs/icon
import {Icon} from 'react-native-elements';

// declare variable Stack to create an instance of a stack navigator
const Stack = createStackNavigator();

// create dummy data to test component
const safetyNets = [
  { id: 1,
  name: 'Dance Team', 
  contacts: [{ name: 'Anita'}, {name: 'Diane'}, {name: 'Nick'}]
  },
  { id: 2,
  name: 'Study Group', 
  contacts: [{ name: 'Claudia'}, {name: 'Josephine'}, {name: 'Yilla'}]
  },
  { id: 3,
    name: 'Roomies', 
    contacts: [{ name: 'Jamie'}, {name: 'Julian'}, {name: 'Jackie'}]
  }
];
// export default the safety nets functional component that will receive props from navigation
export default function AllSafetyNets(props) {
  return (
    <>
      <KeyboardAwareScrollView 
        style={styles.safetyNetContainer}
      >
        {/* render friends image */}
        <Image
          style={styles.friendsImage}
          source={require("../../../assets/icons/friends.png")}
        />
        {/* map over safety net data and render 
        a touch responsive area (like a button) for each safety net in array*/}
        <View style={styles.safetyNetList}>
          {safetyNets.map(safetyNet => {
            return (
              <TouchableOpacity 
                style={styles.clickNetButton}
                key={safetyNet.id}
              >
                <Text>{safetyNet.name}</Text>
                {/* adjust icon styling and include reverse to make icon a button */}
                <Icon 
                  raised
                  name='clear'
                  type='material-icons'
                  color='#14213D'
                  size={15}
                  style={styles.remNetIcon}
                >
                </Icon>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity 
            style={styles.addNetButton}
          >
            <Icon
              raised
              reverse
              name='add'
              type='material-icons'
              color='#14213D'
              size={15}
              style={styles.addNetIcon}
            >
            </Icon>
            <Text>Add New Safety Net</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  )
}
