import React from 'react';
import { Container, ButtonText, IconDiv } from './styles';

const Button = ({children, type, onPress, Icon, props}) => {
  return (
      <Container type={type} onPress={onPress} {...props}>
        {Icon?
          <IconDiv>
            <Icon /> 
          </IconDiv>
        : <></>}
        <ButtonText type={type}>
            {children}
        </ButtonText >
      </Container>
  );
};

export default Button;
