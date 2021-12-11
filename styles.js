import styled, { css } from '@emotion/native'

// Branded Colors
export const Colors = {
  lavender: '#D6D5EA',
  yellow: '#FCA311',
  navy: '#14213D',
  light: '#EDECF6',
  teal: '#586F7C',
}
const { lavender, yellow, navy, light, teal } = Colors

// Shared Components

export const Home = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

// For Map, Reports, Safety Nets screens (the white background)
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 10px 30px 15px 30px;
  font-family: 'Manrope';
  font-size: 14px;
`

// The navy button
export const Button = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
  margin: 5px 30px 5px 30px;
`

// Inverted version of the navy button
export const InvertButton = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  border: 1px solid ${navy};
  background-color: transparent;
  border-radius: 25px;
  color: ${navy};
  align-items: center;
  margin: 5px 30px 5px 30px;
`

// The white text inside Button
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: 'Manrope';
`

// The tiny icons in the Header and Footer
export const NavIcon = styled.Image`
  width: 20px;
  height: 20px;
`

// The container holding Next and Back buttons
export const ReportBar = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

// The purple circle background for SOS
export const FooterIcon = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${lavender};
  border-radius: 100px;
  color: #fff;
  align-items: center;
`

// The Container for the Nav Buttons without the Purple Highlight
export const NavButton = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
`

// Title for each screen
export const Title = styled.Text`
  font-size: 21px;
  color: ${navy};
  text-align: center;
  margin: 25px;
  top: 2%;
  font-family: 'Nanum';
`

// The Form Boxes in Account + Reports
export const Details = styled.View`
  margin: 10px 30px 10px 30px;
  background-color: ${light};
  border: 1px solid ${lavender};
  border-radius: 5px;
`

// For SOS History
export const HistoryBox = styled.View`
  margin: 5px;
  background-color: ${light};
  border: 1px solid ${lavender};
  border-radius: 5px;
  padding: 15px 0 15px 0;
  width: 75%;
`

export const SOSBar = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
`

// Titles for the Forms
export const FormTitle = styled.Text`
  padding: 15px 30px 0px 30px;
  font-weight: bold;
  color: ${navy};
  font-family: 'Manrope';
`

// To contain react-native community elements
export const ModalBox = styled.View`
  border-radius: 5px;
  background-color: ${light};
  border: 1px solid ${lavender};
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 0 10px;
  color: ${navy};
`

export const DetailText = styled.Text`
  padding: 10px;
  font-family: 'Manrope';
`

export const MapInstruction = styled.View`
  background-color: #fff;
  border: 1px solid ${lavender};
  padding: 15px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 5px;
  font-family: 'Manrope';
`

// The Log In Fields
export const LoginInput = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  margin: 10px 30px 10px 30px;
  padding-left: 16px;
  color: ${navy};
  font-family: 'Manrope';
`

// The Form Fields
export const TextInput = styled.TextInput`
  display: flex;
  align-items: center;
  background-color: ${light};
  border: 1px solid ${lavender};
  margin: 10px 30px 10px 30px;
  padding: 15px;
  color: ${navy};
  border-radius: 5px;
`

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
`

// Login + Sign Up

export const Logo = styled.Image`
  max-height: 120px;
  max-width: 120px;
  margin: 15px;
  flex: 1;
  align-self: center;
`

// Footer for the Login & Sign Up Screens (the Have an Account?)
export const FooterView = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`

export const Text = styled.Text`
  color: ${navy};
  margin: 0 30px 2px 30px;
  font-family: 'Manrope';
`

export const FooterLink = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  font-family: 'Manrope';
`

// Dashboard Screen
export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: ${navy};
  text-align: center;
  top: 5%;
  font-family: 'Manrope';
`

// The container with the light lavender
export const DashContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${light};
`

// The grid for the Dashboard Buttons
export const Grid = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

// SOS
export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin: 15px;
`

// Special Dashboard button for SOS
export const SOS = styled.TouchableOpacity`
  align-items: center;
  background-color: ${yellow};
  border-radius: 100px;
  width: 125px;
  height: 125px;
  margin: 10px;
  justify-content: center;
  box-shadow: 1px 1px 2px ${lavender};
  color: #fff;
`

// The Text inside the Dashboard Icons
export const DashText = styled.Text`
  font-size: 14px;
  text-align: center;
  font-family: 'Manrope';
`

// Circular image in safety nets components
export const CircularImage = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 4px ${yellow};
  margin: 25px 0 15px 0;
  justify-content: center;
  align-self: center;
`

// Container for button list in safety nets
export const ButtonListContainer = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

// Button with lavender background in safety nets view
export const FlexRowButton = styled.TouchableOpacity`
  height: 60px;
  width: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${light};
  margin: 8px;
  border-radius: 22px;
  box-shadow: 0.5px 0.5px;
`

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
`

// Small icon used in buttons in safety nets components
export const SmallIcon = styled.Image`
  height: 20px;
`

// Button used to render safety net member names
export const FlexColumnButton = styled.TouchableOpacity`
  height: 60px;
  width: 150px;
  justify-content: center;
  align-items: center;
  background-color: ${light};
  margin: 8px;
  border-radius: 22px;
  box-shadow: 0.5px 0.5px;
`

// Button used to render safety net member names in single safety net view
export const Contact = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  width: 150px;
  justify-content: center;
  align-items: center;
  background-color: ${light};
  margin: 8px;
  padding-left: 10px;
  border-radius: 22px;
  box-shadow: 0.5px 0.5px;
`

// Button used for adding contacts in single safety net view
export const SmallAddButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 150px;
  border-color: ${navy}
  margin: 8px;
  border-radius: 22px;
  border-width: 1px;
  box-shadow: 0.5px 0.5px;
`

// SingleSafetyNet view member buttons
export const SafetyNetButton = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  background-color: ${navy};
  border-radius: 25px;
  color: #fff;
  align-items: center;
`

// Icons for single safety net member buttons
export const SafetyNetIcon = styled.Image`
  width: 20px;
  height: 20px;
`
