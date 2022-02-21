import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MotiView } from "moti";
import CartItem from "../CartItem";
import * as S from "./styles";

interface CartProps {
  visible: boolean;
}

const TITLE_HEIGHT = 34;

const Cart: React.FC<CartProps> = ({ visible }) => {
  return (
    <S.Background>
      <MotiView
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ type: "timing" }}
      >
        <S.Title height={TITLE_HEIGHT}>Meu carrinho</S.Title>
        <S.ScrollWrapper
          contentContainerStyle={{ paddingBottom: TITLE_HEIGHT }}
          scrollIndicatorInsets={{ bottom: TITLE_HEIGHT + 5 }}
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
      </MotiView>
    </S.Background>
  );
};

export default Cart;
