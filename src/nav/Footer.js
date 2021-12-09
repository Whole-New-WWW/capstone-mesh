import React from "react";
import { BottomBar, NavIcon, FooterIcon, NavButton } from "../../styles";
import SOSButton from '../screens/Dashboard/SOS'
import { useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Dashboard from '../screens/Dashboard/Dashboard'
// import Map from '../screens/Dashboard/Map'
// import Account from '../screens/Account/Account'

// const Tab = createBottomTabNavigator();

// export default function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//       <Tab.Screen name="Account" component={Account} />
//       <Tab.Screen name="Map" component={Map} />
//     </Tab.Navigator>
//   );
// }

export default function Footer(props) {
  const navigation = useNavigation();
  console.log('FOOTER >>>', props)

  return (
    <BottomBar>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <NavIcon source={require("../../assets/icons/home.png")} />
      </NavButton>
      <FooterIcon onPress={() => navigation.navigate("SOS")}>
        <NavIcon source={require("../../assets/icons/alert.png")} />
      </FooterIcon>
      <NavButton
        style={{ backgroundColor: "transparent" }}
        onPress={() => navigation.navigate("Map")}
      >
        <NavIcon source={require("../../assets/icons/map.png")} />
      </NavButton>
    </BottomBar>
  );
}
