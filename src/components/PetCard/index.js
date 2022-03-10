import * as React from 'react';
import { Image } from 'react-native';
import { Text, Title } from 'react-native-paper';
import { Container, ImageArea, TitleArea, DescriptionArea} from './styles';
import { FontAwesome } from '@expo/vector-icons';

const PetCard = ({name, sex, age, size, city, state, photo}) => {
  return (
    <Container>
      <TitleArea>
        <Title>{name}</Title>
        <FontAwesome name="heart-o" size={24} color="black" />
      </TitleArea>
      <ImageArea source={photo}>
      </ImageArea>
      <DescriptionArea>
        <Text>{sex}</Text>
        <Text>{age}</Text>
        <Text>{size}</Text>
      </DescriptionArea>
      <DescriptionArea>
        <Text>{city}</Text>
        <Text>{state}</Text>
      </DescriptionArea>
    </Container>
  );
};

export default PetCard;