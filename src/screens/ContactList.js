import React, { useState } from 'react';
import * as Contacts from 'expo-contacts';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon,
  FlexColumnButton,
  SmallAddButton,
  Grid
} from "../../styles";

export default function ContactList() {
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <Container>
      <Text>Contacts Module Example</Text>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });