
/// SOS CODE AS REFERENCE FOR TEXT MESSAGES
import * as SMS from 'expo-sms'
import firebase from 'firebase'
import { AuthContext } from '../../nav/Auth'

const db = firebase.firestore()

const mapSMS = async () => {

    let [user] = AuthContext;

    const getSafetyNetPhoneNums = async () => { // Does this need "async?"
        const userRef = db.collection('users').doc(user.id); // gets a reference for the user's document
        const userData = await userRef.get() // reads that user document from the db
        const userSafetyNets = userData.safety_nets // selects the safety nets array in the user doc
        const phoneNums = []
        // itterate through each safety net
        userSafetyNets.forEach(net => {
            let users = net.users;
            for (let i = 0; i <= users; i++){
                phoneNums.push(users[i].phoneNumber)
            }
        })
        if (phoneNums.length){
            return phoneNums;
        }
        alert('You have no safety net contacts or phone numbers to alert!')
    }

    try {
      const isAvailable = await SMS.isAvailableAsync()
      if (isAvailable) {
        await SMS.sendSMSAsync(
          getSafetyNetPhoneNums(), // FIRESTORE
          `Phew! Your friend ${user.name} has arrived at their destination!`
        )
      } else {
        alert('Error in sending.')
      }
    } catch (e) {
      alert(e)
    }
}

export default mapSMS

// users.doc(user.id) <-- get safety_nets
// filter for the selected safety_nets
// use map to create an array of the phone #s called phoneNums
// message: user name has arrived at their destination!


// async function yourFunction() {
//     try {
//       const updateSafetyNetRef = await firebase.firestore().collection('users').doc(user.id);
//       updateSafetyNetRef.update({
//         safety_nets: firebase.firestore.FieldValue.arrayUnion({name: safetyNet})
//       });
//     }catch(error) {
//     console.log('Problem accessing safety net!', error)
//     }
// }