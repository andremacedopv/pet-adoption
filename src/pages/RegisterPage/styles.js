import styled from "styled-components/native";

export const Container = styled.View`
  flexGrow: 1;
  align-items: center;
  background-color: #fafafa;
  font-family: 'Roboto_400Regular';
`;

export const Info = styled.Text`
  width: 90%;
  margin: 16px;
  text-align: center;
  color: #434343;
  background-color: #cfe9e5;
  padding: 10px;
  font-size: 14px;
`
export const Header = styled.Text`
  width: 90%;
  margin: 28px 0 16px;
  color: #88c9bf;
`
export const InputArea = styled.View`
  width: 90%;
  margin-bottom: 28px;
`

export const InputImage = styled.TouchableOpacity`
  width: 45%;
  margin-bottom: 32px;
  background-color: #e6e7e7;
  align-items: center;
  justify-content: center;
  height: 128px;
  width: 128px;
  flexDirection: column;
`

export const TextImage = styled.Text`
  font-size: 14px;
  color: #757575;
`

export const ButtonArea = styled.View`
  width: 70%;
  margin: 32px 0 24px;
`
