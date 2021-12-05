import React, { useState } from "react";
import { Container, Title, Button, ButtonText, Colors } from "../../../styles";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";

// Color imports
const { light, lavender, navy } = Colors;

export const Time = (props) => {
  props.route.name = `Incident Report`;

  return (
    <Container>
      <Header {...props} />
      <Title>Date and Time</Title>

      <Footer {...props} />
    </Container>
  );
};
