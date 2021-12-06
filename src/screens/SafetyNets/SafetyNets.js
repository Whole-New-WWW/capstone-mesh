import React from 'react';
import Header from '../../nav/Header';
import {
  Container,
  ButtonListContainer,
  FlexRowButton,
  DashText,
  CircularImage,
  AddButton,
  Title,
  SmallIcon
} from "../../../styles";

const safetyNets = [
  {
    id: 1,
    name: "Dance Team",
    contacts: [{ id: 1, name: "Anita" }, { id: 2, name: "Diane" }, { id: 3, name: "Nick" }],
  },
  {
    id: 2,
    name: "Study Group",
    contacts: [{ id: 1, name: "Claudia" }, { id: 2, name: "Josephine" }, { id: 3, name: "Yilla" }],
  },
  {
    id: 3,
    name: "Roomies",
    contacts: [{ id: 1, name: "Jamie" }, { id: 2, name: "Julian" }, { id: 3, name: "Jackie" }],
  },
];