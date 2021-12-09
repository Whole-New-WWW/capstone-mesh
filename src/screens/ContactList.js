import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import { View, StyleSheet, TextInput, FlatList} from 'react-native';
import {
  Container,
  DashText,
  CircularImage,
  AddButton,
  Title,
  Text,
  SmallIcon,
  FlexColumnButton,
  SmallAddButton,
  Grid
} from "../../styles";

export default function ContactList() {
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
      
      setContacts(data)
      setCachedContacts(data)
      setLoading(false)
      // if (data.length > 0) {
      //   const contact = data[0];
      //   console.log(contact);
      // }
    }
    fetchContacts();
  }, []);
  
  return (
    <Container>
      <DashText>
        {contacts[4].firstName}
      </DashText>
    </Container>
  )
}
