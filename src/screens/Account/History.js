import React, { useState } from 'react'
import { Container, Title, Text, HistoryBox, DetailText, SOSBar } from '../../../styles'
import { ScrollView } from 'react-native'
import { AuthContext } from '../../auth/Auth'

export default function Account({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user
  const sos = user.sos

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
              .map((entry, index) => (
                <SOSBar>
                  <Title>{index + 1}</Title>
                  <HistoryBox key={index}>
                  <DetailText>
                    Date: {entry.date}
                    {'\n'}
                    Location: <Text>{entry.location}</Text>
                  </DetailText>
                </HistoryBox>
                </SOSBar>
              ))
          ) : (
            <HistoryBox>
              <DetailText>No SOS history so far. 🎉</DetailText>
            </HistoryBox>
          )}
        </ScrollView>
      </Container>
    </>
  )
}
