import * as React from 'react';
import { Title } from 'react-native-paper';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {TitleArea, ImageArea, Container, DescriptionArea, LineDescription} from './styles';
import { FontAwesome } from '@expo/vector-icons';


const PetCard = ({name, sex, age, size, city, state, photo}) => {
  return (
  <Container>
    <TitleArea>
      <Title>{name}</Title>
      <FontAwesome name="heart-o" size={24} color="black" />
    </TitleArea>
    <ImageArea>
      <View style={styles.container}>
        <ImageBackground source={undefined} resizeMode="cover" style={styles.image}>
        </ImageBackground>
      </View>
    </ImageArea>
    <DescriptionArea>
      <LineDescription>
          <Text>{sex}</Text>
          <Text>{age}</Text>
          <Text>{size}</Text>
      </LineDescription>
      <LineDescription>
          <Text>{city} - {state}</Text>
      </LineDescription>
    </DescriptionArea>
  </Container>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 150
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default PetCard;