/// SOS CODE AS REFERENCE FOR TEXT MESSAGES
import * as SMS from 'expo-sms'
import firebase from 'firebase'
import { AuthContext } from '../../nav/Auth'

const db = firebase.firestore()

const mapSMS = async (userID) => {
    //let user = AuthContext //'ajtLFqLgjwPDIiSNT1UaCjehrJu1';
    console.log('USER ID INSIDE MAPs?????????????????', userID)
    
    const getSafetyNetPhoneNums = async () => { // Does this need "async?"
        const userRef = db.collection('users').doc(userID); // gets a reference for the user's document //.doc(user.id)
        console.log('ref ######################', userRef)
        //test to see if loads the user data -- test on Thursday! Maybe we are getting a promise and not the object we want
        const userData = await userRef.get() // reads that user document from the db
        console.log('userData #################', userData.data())
        const userObj = await userData.data();
        
        const userSafetyNets = userObj.safety_nets // selects the safety nets array in the user doc
        // console.log('nets', userSafetyNets)
        const phoneNums = []
        // itterate through each safety net
        userSafetyNets.forEach(net => {
            let users = net.users;
            for (let i = 0; i < users.length; i++){
                phoneNums.push(users[i].phoneNumber)
            }
        })
        if (phoneNums.length){
            return phoneNums;
        }
        alert('You have no safety net contacts or phone numbers to alert!');
    }
    try {
      const isAvailable = await SMS.isAvailableAsync()
      if (isAvailable) {
        const phoneNumbers = await getSafetyNetPhoneNums() //to fix unresolved promise!
        const response = await SMS.sendSMSAsync(phoneNumbers //for testing place number in array
          , // FIRESTORE getSafetyNetPhoneNums()r
          `AUTOMATED MESSAGE FROM MESH: Phew! Your friend  has arrived at their destination!`
        )
        return response
      } else {
        alert('Error in sending.')
      }
    } catch (e) {
      alert(e)
    }
}
export default mapSMS
