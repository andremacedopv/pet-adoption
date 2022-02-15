import React from 'react';
import { Container, RadioGroup, RadioItem, TitleText, ItemText } from './styles';
import { RadioButton } from 'react-native-paper';
import { Text } from "react-native";

const RadioButtonGroup = ({groupName, values, state, setState}) => {
  return (
      <Container>
          <TitleText>
            {groupName.toUpperCase()}
          </TitleText>
          <RadioGroup>
          {values.map((value) => (
            <RadioItem key={value.value}>
              <RadioButton.Android
              value={value.value}
              status={ state === value.value ? 'checked' : 'unchecked' }
              onPress={() => setState(value.value)}
              />
              <ItemText onPress={() => setState(value.value)}>
                {value.label}
              </ItemText>
            </RadioItem>
          )
          )}
          </RadioGroup>
      </Container>
  );
};

export default RadioButtonGroup;
