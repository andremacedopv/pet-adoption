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
    ${props => (props.type === 'normal') &&
        `
            background-color: #ffd358;
        `
    }
    ${props => (props.type === 'approve') &&
        `
            background-color: #2AA10F;
        `
    }
    ${props => (props.type === 'link') &&
        `
            box-shadow: none;
            background-color: #fafafa;
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

    ${props => (props.type === 'approve') &&
        `
            color: #FFF;
        `
    }

    ${props => (props.type === 'normal') &&
        `
            color: #434343;
        `
    }

    ${props => (props.type === 'link') &&
        `
            color: #88c9bf;
        `
    }    

`;

export const IconDiv = styled.Text`
    color: #434343;
    font-size: 16px;
    margin-right: 3%;
`;