import React, { useState } from 'react'
import { Container, Title, Text, Details, DetailText } from '../../../styles'
import { ScrollView } from 'react-native'
import { AuthContext } from '../../nav/Auth'
import { firebase } from '../../firebase/config'

const auth = firebase.auth()

export default function Account({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user
  const sos = user.sos

  const logOut = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(e)
    }
  }

  return (
    <>
      <Container>
        <Text>{'\n'}{'\n'}
          Each time you trigger an SOS, you can refer to the time, place and
          exact coordinates. You can use this information to fill out an
          Incident Report.{'\n'}
        </Text>
        <ScrollView>
          {sos ? (
            sos
              .slice(0)
              .reverse()
              .map((entry) => (
                <Details key={entry.date}>
                  <DetailText>
                    Date: {entry.date}
                    {'\n'}
                    Location: <Text>{entry.location}</Text>
                  </DetailText>
                </Details>
              ))
          ) : (
            <Details>
              <DetailText>No SOS history so far. 🎉</DetailText>
            </Details>
          )}
        </ScrollView>
      </Container>
    </>
  )
}
