import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    background-color: #88C9BF;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px #434343;
    flex-direction: row;

    ${props => (props.type === 'google') &&
        `
            background-color: #f15f5c;
        `
    }

    ${props => (props.type === 'facebook') &&
        `
            background-color: #194F7C;
        `
    }
`;

export const ButtonText = styled.Text`
    color: #434343;
    font-size: 16px;

    ${props => (props.type === 'google') &&
        `
            color: #FFF;
        `
    }

    ${props => (props.type === 'facebook') &&
        `
            color: #FFF;
        `
    }
`;

export const IconDiv = styled.Text`
    color: #434343;
    font-size: 16px;
    margin-right: 3%;
`;