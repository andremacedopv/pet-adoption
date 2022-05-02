import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 184px;
`;

export const InfoArea = styled.View`
  margin: 16px 20px 8px;
`;

export const InfoSection = styled.View`
  display: flex;

  margin-bottom: 16px;
  padding: 0 10px;
  width: 100%;
  border-bottom-color: #e0e0e0;
  border-bottom-width: 1px;
`;

export const InfoRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;  

  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #434343;
  margin-bottom: 16px;
  padding: 0 10px;
`;

export const Info = styled.View`
  margin-bottom: 16px;
`;

export const FieldTitle = styled.Text`
  color: #f7a800;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Field = styled.Text`
  color: #757575;
  font-size: 14px;
`;

export const ButtonArea = styled.View`
  margin: 0 auto 24px;
  width: 70%;
`;

