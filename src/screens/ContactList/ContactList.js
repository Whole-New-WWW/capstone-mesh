import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import { View, Text, SectionList, TextInput, FlatList, ActivityIndicator, SafeAreaView} from 'react-native';
import { styles } from './styles';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [cachedContacts, setCachedContacts] = useState([]);
  // const [loading, setLoading] = useState(true); 
  
  useEffect(() => {
    async function fetchContacts() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, not granted')
      }
      // if (cachedContacts) {
      //   setContacts(cachedContacts);
      // } 
      // else {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        setContacts(data);
        setCachedContacts(data);
      // }
      // setLoading(false)
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
      console.log('here is person', currentName)
      sectionObjArr.forEach(obj => {
        console.log('HERE IS CURRENT FIRST LETTER OF NAME', currentName[0])
        console.log('Here is current obj', obj)
        if (currentName[0] === obj.title.toLowerCase() || currentName[0] === obj.title) {
          obj.data.push(currentName)
        }
      })
    })
    return sectionObjArr;
  }

  function selectedContact() {

  }

  const finalSections = filteredNames(contacts, sectionList);

  return (
      
    <View style={styles.container}>
      {console.log('HERE IS FINAL SECTIONS', finalSections)}
      <SafeAreaView/>
        <TextInput
          placeholder="search"
          onChangeText={value => searchContacts(value)}
        />
      <SectionList
        sections={finalSections}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

