import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safetyNetContainer : {
    backgroundColor: '#ffffff'
  },
  clickNetButton: {
    flexDirection: 'row',
    height: 60,
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#efefef',
    margin: 8,
    paddingLeft: 110,
    paddingRight: 20,
    borderRadius: 22,
  },
  safetyNetList :{
    justifyContent: 'center',
    alignItems: 'center',
  },
  addNetButton :{
    flexDirection: 'row',
    height: 60,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#14213D",
    borderWidth: 1,
    margin: 8,
    borderRadius: 22,
  },
  friendsImage: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "#fca311",
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
    overflow: 'hidden'
  },
});
