import React, {useState, useEffect, useContext} from 'react';
import * as Contacts from 'expo-contacts';
import { View, Text, SectionList, TextInput, ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import { styles } from './styles';
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../auth/Auth';

export default function ContactList(props) {
  const { user, setUser } = useContext(AuthContext);
 
  const [net, setNet] = useState(props.route.params.net);
  console.log("HERE ARE PROPS", props)
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

  async function addContact(selectedContact) {
    try {
      const currentUserRef = db.collection('users').doc(userId);
      console.log('HERE IS USER ID', userId)
      const updateSafetyNetRef = currentUserRef.safety_nets.filter(
        (safetyNet) => safetyNet.name === net.name,
      )
      if (net.users) {
        updateSafetyNetRef.update({
          users: firebase.firestore.FieldValue.arrayUnion({selectedContact})
        });
      } else {
        updateSafetyNetRef.update({
          users: [{selectedContact}]
        });
      }
      // const updatedUser = await firebase.firestore().collection('users').doc(user.id).get();
      // const updatedUserData = await updatedUser.data();

      // setUser(updatedUserData)
      // setSafetyNets(user.safety_nets)
    }catch(error) {
    console.log('Problem accessing safety net!', error)
    }
  }

  function onContactSelect(friend) {
    // console.log('HERE IS PASSED ITEM', friend)
    const {id} = friend.details;
    let selectedContact = contacts.filter(contact => contact.id === id)
    // console.log('HERE IS THE SELECTED PERSON', selectedContact)
    addContact(selectedContact);
    props.navigation.navigate('Safety Net');
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
          renderItem={({item}) => 
            <TouchableOpacity
              onPress={() => onContactSelect(item)}
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

