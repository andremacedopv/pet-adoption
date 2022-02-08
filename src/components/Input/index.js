import React from 'react';
import { Container, TextInput } from './styles';

const Input = ({...props}) => {

    return (
        <Container>
            <TextInput {...props}></TextInput>
        </Container>
    );
};

export default Input;
