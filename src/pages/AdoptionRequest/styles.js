import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const TitleDiv = styled.View`
  align-items: center;
  margin-left: 10px;
  flex-direction: row;
`;

export const ImageDiv = styled.View`
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  flexWrap: wrap;
  margin-left: 10px;
  color: #434343;
`;

export const Info = styled.Text`
  font-size: 18px;
  flexWrap: wrap;
  color: #434343;
  margin-bottom: 10px;
`;

export const InfoTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flexWrap: wrap;
  color: #434343;
`;

export const InfoDiv = styled.View`
  margin-left: 10px;
  margin-top: 10px;
`;

export const ButtonDiv = styled.View`
  width: 50%;
`;

export const ApproveButtons = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const ButtonsDiv = styled.View`
  margin-left: 10px;
  margin-right: 10px;
`;
