import styles from "./styles";
import { firebase } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { View, Image, Linking, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-elements";

export default function Dashboard(props) {
  return (
    <>
      <h1>Welcome home, {props.fullName}</h1>
      <View style={styles.grid}>
        <TouchableOpacity
          title="Map"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>Map</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/map.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Safety Net"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>Safety Net</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/friends.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Reports"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>Reports</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/reports.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Submit a Report"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>Submit a Report</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/addreport.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="Past Routes"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>Past Routes</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/history.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          title="SOS"
          style={styles.dashIcon}
          onPress={() => Linking.openURL("http://google.com")}
        >
          <h3>SOS</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/alert.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
