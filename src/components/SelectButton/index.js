import React from 'react';
import { Container, ButtonText, IconDiv } from './styles';

const SelectButton = ({children, state, setter, disabled, props}) => {
  return (
      <Container disabled={disabled} blocked={disabled ? 'blocked' : 'unblocked'} checked={state ? 'checked' : 'unchecked'} onPress={() => setter(!state)} {...props}>
        <ButtonText blocked={disabled ? 'blocked' : 'unblocked'}>
            {children}
        </ButtonText >
      </Container>
  );
};

export default SelectButton;
