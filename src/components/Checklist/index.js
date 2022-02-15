import React from 'react';
import { Container, CheckItem, ItemText } from './styles';
import { Checkbox } from 'react-native-paper';

const Checklist = ({label, state, setter}) => {
  return (
      <Container>
        <CheckItem>
          <Checkbox.Android
            status={ state ? 'checked' : 'unchecked' }
            onPress={() => setter(!state)}
          />
          <ItemText onPress={() => setter(!state)}>
            {label}
          </ItemText>
        </CheckItem>
      </Container>
  );
};

export default Checklist;
