import styles from "./styles";
import { firebase } from "../../firebase/config";
import React, { useEffect, useState } from "react";
import { View, Image, Linking } from "react-native";
import { Button } from "react-native-elements";

export default function Dashboard(props) {
  return (
    <>
      <h1>Welcome home, {props.fullName}</h1>
      <View style={styles.grid}>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>Map</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/map.png")}
          />
        </Button>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>Safety Net</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/friends.png")}
          />
        </Button>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>Reports</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/reports.png")}
          />
        </Button>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>Submit a Report</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/addreport.png")}
          />
        </Button>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>Past Routes</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/history.png")}
          />
        </Button>
        <Button style={styles.dashIcon} onPress={() => Linking.openURL('http://google.com')}>
          <h3>SOS</h3>
          <Image
            style={styles.dashImg}
            source={require("../../../assets/icons/alert.png")}
          />
        </Button>
      </View>
    </>
  );
}
