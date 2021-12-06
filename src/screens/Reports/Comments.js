import React, { useState } from "react";
import {
  Text,
  Container,
  Title,
  Button,
  ButtonText,
  Colors,
  TextInput,
  FormBox,
} from "../../../styles";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";
import { firebase } from "../../firebase/config";

// Color imports
const { light, lavender, navy } = Colors;

export const Comments = (props) => {
  props.route.name = `Incident Report`;
  const [comments, setComments] = useState("");

  console.log('COMMENTS >>>')

  const onSubmit = () => {
    try {
      const incidentsRef = firebase.firestore().collection("incidents");
      incidentsRef.add({
        comments
      });
      props.navigation.navigate('Dashboard')
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Container>
        <Header {...props} />
        <Title>Additional Comments</Title>
        <Text>Type your comments below:</Text>
        <FormBox>
          <TextInput
            style={{
              height: 100,
              width: "90%",
              backgroundColor: "transparent",
            }}
            multiline={true}
            placeholder="Additional Comments"
            onChangeText={(text) => setComments(text)}
            value={comments}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </FormBox>
        <Button onPress={onSubmit}>
          <ButtonText>Submit</ButtonText>
        </Button>
      </Container>
      <Footer {...props} />
    </>
  );
};
