import React from "react";
import { Text } from "react-native";
import * as S from "./styles";

const Screen5: React.FC = () => {
  return (
    <S.Wrapper>
    <Text style={{ fontSize: 18, textAlign: 'center', color: "#2F7853" }}>
      Custom Bottom Tabs App.{'\n'}Screen 5
      </Text>
    </S.Wrapper>
  );
};

export default Screen5;
