import React, {useState, useEffect} from 'react';
import * as Contacts from 'expo-contacts';
import { View, Text, SectionList, TextInput, ActivityIndicator, SafeAreaView, StatusBar} from 'react-native';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ContactList(props) {
  const [contacts, setContacts] = useState([]);
  const [cachedContacts, setCachedContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState({});

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
      let currentName = `${person.firstName} ${person.lastName}`;
      sectionObjArr.forEach(obj => {
        if (currentName[0] === obj.title.toLowerCase() || currentName[0] === obj.title) {
          obj.data.push(currentName)
        }
      })
    })
    return sectionObjArr;
  }
  // WIP
  // async function addContact() {
  //   try {
  //     const updateSafetyNetRef = await firebase.firestore().collection('users').doc(user.id);
  //     updateSafetyNetRef.update({
  //       safety_nets: firebase.firestore.FieldValue.arrayUnion({name: safetyNet})
  //     });

  //     const updatedUser = await firebase.firestore().collection('users').doc(user.id).get();
  //     const updatedUserData = await updatedUser.data();

  //     setUser(updatedUserData)
  //     setSafetyNets(user.safety_nets)
  //   }catch(error) {
  //   console.log('Problem accessing safety net!', error)
  //   }
  // }

  // function addContact() {
  //   selected = {}
  //   contacts.filter(contact => contact.fullName === )
  //   onSubmit();
  // }

  const finalSections = filteredNames(contacts, sectionList);

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
              // onPress={() => addContact()}
            >
              <Text style={styles.item}>{item}</Text>
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

