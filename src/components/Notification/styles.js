import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #88C9BF;
    padding-top: 5px;
    padding-bottom: 8px;
    margin-top: 10px;
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 2px 2px #434343;
    flex-direction: row;
`;

export const TextContainer = styled.View`
    width: 82%;
`;

export const TextDiv = styled.Text`
    color: #434343;
    font-size: 14px;
    flexWrap: wrap;
`;

export const TitleDiv = styled.Text`
    color: #434343;
    font-size: 20px;
    font-weight: bold;
    flexWrap: wrap;
`;

export const ImageDiv = styled.View`
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-left: 8px;
`;
