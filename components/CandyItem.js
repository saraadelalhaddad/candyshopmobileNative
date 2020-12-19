import React, { useState } from "react";
import { BakeryItemStyled } from "../styles";
import { Button, Left, ListItem, Right } from "native-base";
import { Image, Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const CandyItem = ({ candy }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, candyId: candy.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  // console.log(candy);
  // console.log("test test");
  return (
    <ListItem>
      <Left>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: candy.image }}
        />
        <BakeryItemStyled>{candy.name}</BakeryItemStyled>
      </Left>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          totalWidth={60}
          initValue={quantity}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default CandyItem;
