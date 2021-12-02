import React from "react";
import { Linking } from "react-native";
import {
  Title,
  Grid,
  Icon,
  DashButton,
  DashContainer,
  DashText,
  SOS,
} from "../../../styles";

export default function Dashboard(props) {
  return (
<<<<<<< HEAD
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
          onPress={() => props.navigation.navigate('All-Safety-Nets')}
        >
          <Text>Safety Nets</Text>
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
=======
    <DashContainer>
      <Title>Welcome home, {props.firstName}</Title>
      <Grid>
        <DashButton onPress={() => props.navigation.navigate("Map")}>
          <DashText>Map</DashText>
          <Icon source={require("../../../assets/icons/map.png")} />
        </DashButton>
        <DashButton onPress={() => props.navigation.navigate("Map")}>
          <DashText>Safety Net</DashText>
          <Icon source={require("../../../assets/icons/friends.png")} />
        </DashButton>
        <DashButton onPress={() => Linking.openURL("http://google.com")}>
          <DashText>Reports</DashText>
          <Icon source={require("../../../assets/icons/reports.png")} />
        </DashButton>
        <DashButton onPress={() => Linking.openURL("http://google.com")}>
          <DashText>Submit a Report</DashText>
          <Icon source={require("../../../assets/icons/addreport.png")} />
        </DashButton>
        <DashButton onPress={() => Linking.openURL("http://google.com")}>
          <DashText>Past Routes</DashText>
          <Icon source={require("../../../assets/icons/history.png")} />
        </DashButton>
        <SOS onPress={() => Linking.openURL("http://google.com")}>
          <DashText>SOS</DashText>
          <Icon source={require("../../../assets/icons/alert.png")} />
        </SOS>
      </Grid>
    </DashContainer>
>>>>>>> 46f33554a03addeed40ba1e98650f7e69fbffe0c
  );
}
