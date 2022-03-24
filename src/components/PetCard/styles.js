import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    marginTop: 10px;
    width: 95%;
`;

export const TitleArea = styled.View`
    display: flex;
    flex-direction: row;
    border-top-left-radius: 5;
    border-top-right-radius: 5;
    justify-content: space-between;
    background-color: #fee29b;
    align-items: center;
    paddingHorizontal: 16px;
`;

export const ImageArea = styled.TouchableOpacity`
    display: flex;
    height: 150;
`;
export const LineDescription = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    padding: 5px;
`;

export const DescriptionArea = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fa8;
    border-bottom-left-radius: 5;
    border-bottom-right-radius: 5;
`;