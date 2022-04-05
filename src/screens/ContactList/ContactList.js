import React, {useState, useEffect, useContext} from 'react';
import * as Contacts from 'expo-contacts';
import { View, Text, SectionList, TextInput, ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import { styles } from './styles';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../auth/Auth';

const db = firebase.firestore()

export default function ContactList(props) {
  const { user, setUser } = useContext(AuthContext);
 
  const [net, setNet] = useState(props.route.params.net);
  // console.log("HERE ARE PROPS IN CONTACT", props)
  const userId = user.id;
  const [contacts, setContacts] = useState([]);
  const [cachedContacts, setCachedContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, not granted')
      }
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      setContacts(data);
      setCachedContacts(data);
      setLoading(false);
    }
    fetchContacts();
  }, []);

  function searchContacts(value) {
    const filteredContacts = cachedContacts.filter(contact => {
      let contactLowercase = (
        contact.firstName +
        ' ' +
        contact.lastName
      ).toLowerCase();
      let searchTermLowercase = value.toLowerCase();
      return contactLowercase.indexOf(searchTermLowercase) > -1;
    });
    setContacts(filteredContacts);
  }
  
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let sectionList = alphabet.map(char => ({title: char, data:[]}));

  function filteredNames(contacts, sectionList) {
    let sectionObjArr = sectionList;
    let peopleList = contacts;
    peopleList.forEach((person, index) => {
      let currentName = '';
      if (person.lastName) {
        currentName = `${person.firstName} ${person.lastName}`;
      }
      else {
        currentName = `${person.firstName}`
      } 
      sectionObjArr.forEach(obj => {
        if (currentName[0] === obj.title.toLowerCase() || currentName[0] === obj.title) {
          obj.data.push({fullName: currentName, details: person})
        }
      })
    })
    return sectionObjArr;
  }

  const finalSections = filteredNames(contacts, sectionList);

  function updateNets(usersNets, netToUpdate, friendDetails) {
    let updatedNets = [];
    usersNets.forEach(currNet => {
      if (currNet.name === netToUpdate) {
        setNet(currNet);
        if (currNet.users) {
          currNet.users.push(friendDetails);
          updatedNets.push(currNet);
        } else {
          currNet['users'] = [friendDetails];
          updatedNets.push(currNet);
        }
      } else {
        updatedNets.push(currNet);
      }
    })
    return updatedNets;
  }

  async function addContact(friendDetails) {
    try {
      const netToUpdate = net.name;
      const currentUserRef = db.collection('users').doc(userId);
      const currentUserSnapshot = await currentUserRef.get();
      const currentUserObj = currentUserSnapshot.data();
      const usersNets = currentUserObj.safety_nets;

      const finalUpdatedNets = updateNets(usersNets, netToUpdate, friendDetails);
      
      await currentUserRef.set({
        safety_nets: finalUpdatedNets
      }, {merge: true})

      const updatedUserRef = db.collection('users').doc(userId);
      const updatedUserSnapshot = await currentUserRef.get();
      const updatedUserObj = currentUserSnapshot.data();
      setUser(updatedUserObj)
      
      props.navigation.navigate('Safety Net', {net});

    }catch(error) {
    console.log('Problem accessing safety net!', error)
    }
  }

  function onContactSelect(friend) {
    // console.log('here is friend', friend);
    const friendMobile = Number(friend.details.phoneNumbers[0].digits);
    // console.log('here is friend number', friendMobile);
    const friendName = friend.details.name;
    let friendDetails = {
      fullName: friendName,
      phoneNumber: friendMobile,
    };
    addContact(friendDetails);
    
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={{marginTop: 400}}/>
      ) : (
      <>
        <SafeAreaView/>
          <TextInput
            style={{
              height: 30,
              fontSize: 18,
            marginLeft: 10}}
            placeholder="Search"
            onChangeText={value => searchContacts(value)}
          />
        <SectionList
          sections={finalSections}
          renderItem={({item}, net) => 
            <TouchableOpacity
              onPress={() => 
                onContactSelect(item)
              }
            >
              <Text style={styles.item}>{item.fullName}</Text>
            </TouchableOpacity>
          }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </>
      )}
    </View>
  );
}

