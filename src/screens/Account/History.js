import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase/config'
import {
  Container,
  Title,
  Text,
  HistoryBox,
  DetailText,
  SOSBar,
} from '../../../styles'
import { ScrollView, View } from 'react-native'
import { AuthContext } from '../../auth/Auth'

export default function Account({ navigation }) {
  let [user] = useState(AuthContext)
  user = user._currentValue.user
  const sos = user.sos

  return (
    <Container>
      <Text>
        {'\n'}
        {'\n'}
        Each time you trigger an SOS, you can refer to the time, place and exact
        coordinates. You can use this information to fill out an Incident
        Report.{'\n'}
      </Text>
      <ScrollView>
        {sos ? (
          sos
            .slice(0)
            .reverse()
            .map((entry, index) => (
              <SOSBar key={index}>
                <Title>{index + 1}</Title>
                <View style={{ width: `100%` }}>
                  <HistoryBox>
                    <Text>Date: </Text>
                    <Text selectable={true}>{entry.date}</Text>
                  </HistoryBox>
                  <HistoryBox>
                    <Text>Location: </Text>
                    <Text selectable={true}>{entry.location}</Text>
                  </HistoryBox>
                </View>
              </SOSBar>
            ))
        ) : (
          <HistoryBox>
            <DetailText>No SOS history so far. 🎉</DetailText>
          </HistoryBox>
        )}
      </ScrollView>
    </Container>
  )
}
