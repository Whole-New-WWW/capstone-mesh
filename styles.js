import styled, { css } from "@emotion/native";
import {
  View,
  Image,
  Linking,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ImageBackground
} from "react-native";

// Branded Fonts
import Manrope from './assets/fonts/Manrope-Regular.ttf';
import Nanum from './assets/fonts/NanumMyeongjo-Regular.ttf';

// Branded Colors
export const Colors = {
  lavender: "#D6D5EA",
  yellow: "#FCA311",
  navy: "#14213D",
  light: "#EDECF6",
  teal: "#586F7C"
};
const { lavender, yellow, navy, light, teal } = Colors;

export const DashContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${light};
`;

// Shared Components
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
`
export const TopBar = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${light};
  padding: 15px;
  max-height: 80px;
`;

export const TopIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

// Dashboard Screen
export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin: 15px;
`;

export const DashButton = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  width: 150px;
  height: 150px;
  margin: 10px;
  justify-content: center;
  box-shadow: 1px 1px 2px ${lavender};
`;

export const SOS = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  background-color: ${yellow};
  border-radius: 25px;
  width: 150px;
  height: 150px;
  margin: 10px;
  justify-content: center;
  box-shadow: 1px 1px 2px ${lavender};
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${navy};
  text-align: center;
  top: 8%;
`;

export const DashText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 5px;
`;