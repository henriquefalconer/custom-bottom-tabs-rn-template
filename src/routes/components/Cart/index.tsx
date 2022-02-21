import React from "react";
import { Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CartItem from "../CartItem";
import { SCROLL_SPACE_BUFFER } from "../TabBar";
import * as S from "./styles";

const Cart: React.FC = () => {
  return (
    <S.ScrollWrapper
      contentContainerStyle={{ paddingBottom: SCROLL_SPACE_BUFFER + 10 }}
      scrollIndicatorInsets={{ bottom: SCROLL_SPACE_BUFFER }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <CartItem key={i} onRemove={() => {}} />
      ))}
      <S.ButtonWrapper onPress={() => {}} underlayColor="#ffeeb3">
        <>
          <S.Text>FINALIZAR COMPRA</S.Text>
          <Entypo name="chevron-right" size={24} color="#222" />
        </>
      </S.ButtonWrapper>
    </S.ScrollWrapper>
  );
};

export default Cart;
