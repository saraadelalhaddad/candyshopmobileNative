import { Button, Icon } from "native-base";
import { CartButtonStyled, CartTextStyled } from "../../styles";

import { Alert } from "react-native";
import React from "react";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("Cart");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Button transparent light onPress={handlePress}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialCommunityIcons" name="cart" />
    </Button>
  );
};

export default observer(CartButton);
