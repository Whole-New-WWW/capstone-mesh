import styles from "./styles";
import { firebase } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { View, Image, Linking, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Map from "./Map"
// import { TouchableOpacity } from "react-native-elements";

const Stack = createStackNavigator();

export default function Dashboard(props) {
  console.log('testing props', props)
  return (
    <>
      <Text>Welcome home, {props.fullName}</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => props.navigation.navigate('Map')}
        >
          <Text>Map</Text>
          <Image
            source={require("../../../assets/icons/map.png")}
            style={styles.dashImg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <Text>Safety Net</Text>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/friends.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <Text>Reports</Text>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/reports.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <Text>Submit a Report</Text>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/addreport.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <Text>Past Routes</Text>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/history.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <Text>SOS</Text>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/alert.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
