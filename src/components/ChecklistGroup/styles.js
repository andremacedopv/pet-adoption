import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
`;

export const CheckGroup = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`;

export const CheckItem = styled.View`
    flex-direction: row;
    align-items: center;
    min-width: 33%;
`;

export const TitleText = styled.Text`
    color: #589B9B;
    font-size: 14px;
    margin-left: 5px;
    margin-bottom: 3px;
`;

export const ItemText = styled.Text`
    color: #434343;
    font-size: 14px;
`;
