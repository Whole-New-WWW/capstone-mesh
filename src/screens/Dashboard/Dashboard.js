import styles from "./styles";
import { firebase } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { View, Image, Linking, TouchableOpacity, Text } from "react-native";

export default function Dashboard(props) {
  return (
    <>
      <Text>Welcome home, {props.fullName}</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
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
