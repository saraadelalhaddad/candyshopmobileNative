import React from "react";
import { ListItem, Body, Text, Right } from "native-base";

// Stores
import cartStore from "../stores/cartStore";

// Styles
import { TotalPrice, TrashIcon } from "../styles";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
