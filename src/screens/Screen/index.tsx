import React from "react";
import { Text } from "react-native";
import * as S from "./styles";

const Screen: React.FC = () => {
  return (
    <S.Wrapper>
      <Text style={{ fontSize: 18, color: "#2F7853" }}>
        Custom Bottom Tabs App.
      </Text>
    </S.Wrapper>
  );
};

export default Screen;
