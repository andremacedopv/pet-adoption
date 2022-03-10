import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    background-color: #3f0;
    borderRadius: 4;
`;

export const TitleArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ImageArea = styled.Image`
    width: 122px;
    height: 44px;
    margin-bottom: 10%;
`;

export const DescriptionArea = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;