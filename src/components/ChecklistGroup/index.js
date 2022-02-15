import React from 'react';
import { Container, CheckGroup, CheckItem, TitleText, ItemText } from './styles';
import { Checkbox } from 'react-native-paper';
import { Text } from "react-native";

const ChecklistGroup = ({groupName, values }) => {
  return (
      <Container>
          <TitleText>
            {groupName.toUpperCase()}
          </TitleText>
          <CheckGroup>
          {values.map((value) => (
            <CheckItem key={value.label}>
              <Checkbox
              status={ value.state ? 'checked' : 'unchecked' }
              onPress={() => value.setter(!value.state)}
              />
              <ItemText onPress={() => value.setter(!value.state)}>
                {value.label}
              </ItemText>
            </CheckItem>
          )
          )}
          </CheckGroup>
      </Container>
  );
};

export default ChecklistGroup;
