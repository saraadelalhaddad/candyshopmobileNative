import styled from "styled-components/native";
import { Icon } from "native-base";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #000;
`;

export const BakeryItemStyled = styled.Text`
  color: #000;
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const BakeryDetailWrapper = styled.View`
  margin-top: 50;
`;

export const BakeryDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const BakeryDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;

export const TotalPrice = styled.Text`
  color: #000;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: #000;
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: #000;
  font-size: 20px;
`;

export const TrashIcon = styled(Icon)`
  color: red;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: pink;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: green;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: pink;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: pink;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: pink;
  border-bottom-color: pink;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 5%;
  background-color: pink;
  margin-top: 30;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18;
`;

export const AuthOther = styled.Text`
  color: pink;
  margin-top: 15px;
`;
