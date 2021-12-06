import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  FormCheckBox,
  Colors,
} from "../../../styles";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";

// Color imports
const { light, lavender, navy } = Colors;

export const Type = (props) => {
  props.route.name = `Incident Report`;

  const [selected, setSelected] = useState([]);
  const options = [
    "Sexual Assault",
    "Robbery",
    "Hate crime",
    "Stalking",
    "Assault",
    "Other",
  ];

  return (
    <Container>
      <Header {...props} />
      <Title>What type of incident occured?</Title>
      <Text>Select all that apply:</Text>

      {/* <FormCheckBox>
        <Text>Sexual Assault</Text>
      </FormCheckBox>
      <FormCheckBox>
        <Text>Robbery</Text>
      </FormCheckBox>
      <FormCheckBox>
        <Text>Hate crime</Text>
      </FormCheckBox>
      <FormCheckBox>
        <Text>Stalking</Text>
      </FormCheckBox>
      <FormCheckBox>
        <Text>Assault</Text>
      </FormCheckBox>
      <FormCheckBox>
        <Text>Other</Text>
      </FormCheckBox> */}

      <Footer {...props} />
    </Container>
  );
};
