import React from "react";
import { View, Text } from "react-native";
import { List, Content, Spinner } from "native-base";
// component
import CandyItem from "./CandyItem";

const CandyList = ({ candies }) => {
  const candyList = candies.map((candy) => (
    <CandyItem candy={candy} key={candy.id} />
  ));

  return <List>{candyList}</List>;
};

export default CandyList;
