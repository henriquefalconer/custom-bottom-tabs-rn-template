import styled, { css } from "styled-components/native";
import Svg from "react-native-svg";

export const Wrapper = styled.View`
  background: #fcfcfc;
  justify-content: flex-end;
`;

export const SVGWrapper = styled(Svg)`
  position: absolute;
  box-shadow: 0 -4px 3px #ddd;
`;

export const CircleButton = styled.TouchableOpacity<{ color: string }>`
  ${({ color }) => css`
    background: ${color};
    border-radius: 32px;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    bottom: 8px;
    box-shadow: 0 4px 11px #d3d3d3;
  `}
`;

export const Background = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  top: -20px;
`;
