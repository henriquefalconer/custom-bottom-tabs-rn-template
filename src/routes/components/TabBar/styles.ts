import styled, { css } from "styled-components/native";
import Svg from "react-native-svg";
import { MotiView } from "moti";

export const Wrapper = styled.View`
  justify-content: flex-end;
`;

export const ExtWrapper = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const SVGWrapper = styled(Svg)`
  position: absolute;
  box-shadow: 0 -6px 3px #ddd;
`;

export const CircleButton = styled.TouchableOpacity<{
  color: string;
  size: number;
  bottom: number;
}>`
  ${({ color, size, bottom }) => css`
    background: ${color};
    border-radius: ${size / 2}px;
    width: ${size}px;
    height: ${size}px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    bottom: ${bottom}px;
    box-shadow: 0 4px 11px #d3d3d3;
    elevation: 4;
  `}
`;

export const Background = styled(MotiView)<{ bottom: number }>`
  ${({ bottom }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    bottom: ${bottom}px;
  `}
`;
