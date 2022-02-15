import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #e6e7e7;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px #434343;
    flex-direction: row;

    ${props => (props.checked === 'checked') &&
        `
            background-color: #88C9BF;
        `
    }
`;

export const ButtonText = styled.Text`
    color: #434343;
    font-size: 16px;

    ${props => (props.blocked === 'blocked') &&
        `
            color: #919191;
        `
    }
`;

export const IconDiv = styled.Text`
    color: #434343;
    font-size: 16px;
    margin-right: 3%;
`;