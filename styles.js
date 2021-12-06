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

// For Map, Reports, Safety Nets screens (the white background)
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 15px;
`;

// The navy button
export const Button = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
  margin: 5px 30px 15px 30px;
`;

// The white text inside Button
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

// The flex container in the Header
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

// The tiny icons in the Header and Footer
export const NavIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

// The container in Footer
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

// The container holding Next and Back buttons
export const ReportBar = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// The purple circle background for SOS
export const FooterIcon = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${lavender};
  border-radius: 100px;
  color: #fff;
  align-items: center;
`;

// The Container for the Nav Buttons without the Purple Highlight
export const NavButton = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
`;

// Title for each screen
export const Title = styled.Text`
  font-size: 18px;
  color: ${navy};
  text-align: center;
  margin: 25px;
`;

// The Form Fields
export const TextInput = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin: 10px 30px 10px 30px;
  padding-left: 16px;
  color: ${navy};
`;

// A Container holding form fields (specifically for Reports)
export const FormBox = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 5px;
  background-color: ${light};
  border: 1px solid ${lavender};
  margin: 10px 30px 10px 30px;
  padding-top: 15px;
  color: ${navy};
`;

// Login + Sign Up

export const Logo = styled.Image`
  flex: 1;
  height: 120px;
  width: 120px;
  align-self: center;
  margin: 30px;
`;

// Footer for the Login & Sign Up Screens (the Have an Account?)
export const FooterView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${navy};
  margin: 0 30px 2px 30px;
`;

export const FooterLink = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

// Dashboard Screen
export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: ${navy};
  text-align: center;
  top: 5%;
`;

// The container with the light lavender
export const DashContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${light};
`;

// The grid for the Dashboard Buttons
export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

// Dashboard Button Icons
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

// Special Dashboard button for SOS
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

// The Text inside the Dashboard Icons
export const DashText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin: 5px;
`;

// Circular image in safety nets components
export const CircularImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border-width: 4px;
  border-color: ${yellow};
  align-self: center;
  margin-top: 60px;
  margin-bottom: 20px;
  overflow: hidden;
`;

// Container for button list in safety nets
export const ButtonListContainer = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

// Button with lavender background in safety nets view
export const FlexRowButton = styled.TouchableOpacity`
  height: 60px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${light};
  margin: 8px;
  border-radius: 22px;
  box-shadow: 0.5px 0.5 px;
`;

// Add safety net button in single safety net view 
export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-color: ${navy};
  border-width: 1px;
  margin: 8px;
  border-radius: 22px;
  box-shadow: 0.5px 0.5px;
`;


