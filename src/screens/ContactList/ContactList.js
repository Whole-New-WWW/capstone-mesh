import React, { PureComponent, useState, useEffect, useMemo} from 'react';
import * as Contacts from 'expo-contacts';
import { View, Text, SectionList, TextInput, FlatList, ActivityIndicator, SafeAreaView} from 'react-native';
import { styles } from './styles';
import Header from '../../nav/Header';
import Footer from '../../nav/Footer';

export default function ContactList(props) {
  const [contacts, setContacts] = useState([]);
  const [cachedContacts, setCachedContacts] = useState([]);
  // const [loading, setLoading] = useState(true); 
  // const finalSectionList = useMemo(() => {
  //   return filteredNames(contacts, sectionList)
  // }, [contacts])

  useEffect(() => {
    async function fetchContacts() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, not granted')
      }
      // if (cachedContacts) {
      //   setContacts(cachedContacts);
      // } 
      // else {Idk though 
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
  
  // let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  // let sectionList = alphabet.map(char => ({title: char, data:[]}));
  let sectionList = [
    { title: 'A', data: [] }, { title: 'B', data: [] },
    { title: 'C', data: [] }, { title: 'D', data: [] },
    { title: 'E', data: [] }, { title: 'F', data: [] },
    { title: 'G', data: [] }, { title: 'H', data: [] },
    { title: 'I', data: [] }, { title: 'J', data: [] },
    { title: 'K', data: [] }, { title: 'L', data: [] },
    { title: 'M', data: [] }, { title: 'N', data: [] },
    { title: 'O', data: [] }, { title: 'P', data: [] },
    { title: 'Q', data: [] }, { title: 'R', data: [] },
    { title: 'S', data: [] }, { title: 'T', data: [] },
    { title: 'U', data: [] }, { title: 'V', data: [] },
    { title: 'W', data: [] }, { title: 'X', data: [] },
    { title: 'Y', data: [] }, { title: 'Z', data: [] }
  ];

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
      <Header {...props}/>
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
        // initialNumToRender={30}
      />
      <Footer {...props}/>
    </View>
  );
}

