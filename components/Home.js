import React from "react";
import { ImageBackground } from "react-native";
// style
import {
  HomeBackground,
  TopStyling,
  Title,
  BottomStyling,
  ButtonStyled,
  OverLayContainer,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri:
          "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Candylicious</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("BakeryList")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
