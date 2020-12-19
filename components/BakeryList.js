import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import { List, Content, Spinner } from "native-base";
// store
import bakeryStore from "../stores/bakeryStore";
// component
import BakeryItem from "./BakeryItem";

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;
  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{bakeryList}</List>
    </Content>
  );
};

export default observer(BakeryList);
