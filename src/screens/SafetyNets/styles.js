import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#efefef',
    margin: 15,
    alignContent: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff'
  },
  safetyNetList :{
    flexDirection: 'column',
    justifyContent: 'center',
  },
  addNetButton :{
    borderColor: "#14213D",
    borderWidth: 1,
    margin: 15,
    textAlign: 'center',
    borderRadius: 25,
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
  },
  friendsIcon: {
    resizeMode: 'center',
    width: 175,
    height: 175,
    borderRadius: 175,
    borderWidth: 4,
    borderColor: "#fca311",
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 15,
    overflow: 'hidden'
  },
});
