import React from 'react';
import { Container, TextInput } from './styles';

const Input = ({disabled, ...props}) => {

    return (
        <Container>
            <TextInput editable={disabled} {...props}></TextInput>
        </Container>
    );
};

export default Input;
