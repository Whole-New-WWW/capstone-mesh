import styled, { css } from "@emotion/native";

// Branded Fonts
import Manrope from "./assets/fonts/Manrope-Regular.ttf";
import Nanum from "./assets/fonts/NanumMyeongjo-Regular.ttf";

// Branded Colors
export const Colors = {
  lavender: "#D6D5EA",
  yellow: "#FCA311",
  navy: "#14213D",
  light: "#EDECF6",
  teal: "#586F7C",
};
const { lavender, yellow, navy, light, teal } = Colors;

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
  margin: 5px 30px 0 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
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

export const NavIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const BottomBar = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${lavender};
  padding: 15px 25px 25px 25px;
`;

export const FooterIcon = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${lavender};
  border-radius: 100px;
  color: #fff;
  align-items: center;
`;

export const NavButton = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${navy};
  text-align: center;
  top: 5%;
  margin-bottom: 25px;
`;

export const TextInput = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin: 10px 30px 10px 30px;
  padding-left: 16px;
  color: ${navy};
`;

// Login + Sign Up

export const Logo = styled.Image`
  flex: 1;
  height: 120px;
  width: 120px;
  align-self: center;
  margin: 30px;
`

export const FooterView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`
export const Text = styled.Text`
  font-size: 14px;
  color: ${navy};
`

export const FooterLink = styled.Text`
  font-size: 14px;
  font-weight: bold;
`

// Dashboard Screen
export const DashContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${light};
`;

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

export const DashText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 5px;
`;
