import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
  margin-bottom: 10px;
`;

export const SubWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  margin-right: 16px;
`;

export const Name = styled.Text`
`;

export const Count = styled.Text`
  margin-right: 10px;
  color: #888;
`;
