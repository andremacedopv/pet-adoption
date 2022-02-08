import React from 'react';
import { Container, ButtonText, IconDiv } from './styles';

const Button = ({children, type, onCLick, Icon, props}) => {
  return (
      <Container type={type} onClick={onCLick} {...props}>
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
