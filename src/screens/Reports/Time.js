import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  ButtonText,
  Colors,
  TextInput,
  ReportBar,
} from "../../../styles";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";

// Color imports
const { light, lavender, navy } = Colors;

export const Time = (props) => {
  props.route.name = `Incident Report`;
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const onNext = () => {
    try {
      props.navigation.navigate('Comments', { time: time });
    } catch (e) {
      alert(e);
    }
  };

  console.log('TIME >>>', time, date)

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>Date and Time</Title>
        <TextInput
          style={{
            height: 50,
            width: "85%",
            backgroundColor: `${light}`,
          }}
          placeholder="Time"
          onChangeText={(text) => setTime(text)}
          value={time}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 50,
            width: "85%",
            backgroundColor: `${light}`,
          }}
          placeholder="Date"
          onChangeText={(text) => setDate(text)}
          value={date}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <ReportBar>
          <Button onPress={onNext}>
            <ButtonText>Back</ButtonText>
          </Button>
          <Button onPress={onNext}>
            <ButtonText>Next</ButtonText>
          </Button>
        </ReportBar>
      </Container>
      <Footer {...props} />
    </>
  );
};
