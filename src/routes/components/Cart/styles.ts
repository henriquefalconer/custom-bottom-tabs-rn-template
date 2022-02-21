import styled, { css } from "styled-components/native";
import { ScrollView } from 'react-native-gesture-handler';

export const Background = styled.View`
  background: #2f7853;
  flex: 1;
  margin-bottom: -1px;
`;

export const Title = styled.Text<{ height: number }>`
  ${({ height }) => css`
    font-size: 20px;
    margin: 0 10px;
    height: ${height}px;
    color: white;
    font-weight: bold;
  `}
`;

export const ScrollWrapper = styled(ScrollView)`
  padding-bottom: 10px;
`;

export const ButtonWrapper = styled.TouchableHighlight`
  flex-direction: row;
  background: #fdd231;
  height: 56px;
  margin: 10px;
  margin-top: 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #222;
  font-weight: bold;
`;
