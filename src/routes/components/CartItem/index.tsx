import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";

interface CartItemProps {
  onRemove(): void;
}

const CartItem: React.FC<CartItemProps> = ({ onRemove }) => {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.Image
          source={{
            uri: "https://m.media-amazon.com/images/I/51YLsREcAaL.jpg",
          }}
        />
        <S.Name>Mamaco</S.Name>
      </S.SubWrapper>
      <S.SubWrapper>
        <S.Count>1 un.</S.Count>
        <TouchableOpacity onPress={onRemove}>
          <AntDesign name="close" size={24} color="red" />
        </TouchableOpacity>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default CartItem;
