import React from "react";
import { View, Text } from "react-native";
import { List, Component, ListItem } from "native-base";
import { Image } from "react-native";
// style
import { BakeryItemStyled } from "../styles";

const BakeryItem = ({ bakery, navigation }) => {
  //   console.log("0000");
  //   return <Text>hello test test</Text>;
  console.log(bakery.image);
  return (
    <ListItem
      onPress={() => navigation.navigate("BakeryDetail", { bakery: bakery })}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: bakery.image.replace("localhost", "192.168.8.105") }} // bad practice, save in server in future
      />
      <BakeryItemStyled>{bakery.name}</BakeryItemStyled>
    </ListItem>
  );
};

export default BakeryItem;
