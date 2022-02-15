import React from 'react';
import { Container, ButtonText, IconDiv } from './styles';

const SelectButton = ({children, state, setter, props}) => {
  return (
      <Container checked={state ? 'checked' : 'unchecked'} onPress={() => setter(!state)} {...props}>
        <ButtonText>
            {children}
        </ButtonText >
      </Container>
  );
};

export default SelectButton;
