import React from 'react';
import { Image, StyleSheet } from "react-native";
import { Container, TextContainer, ImageDiv, TitleDiv, TextDiv } from './styles';

const Notification = ({children, onPress, image, title, props}) => {
  return (
      <Container onPress={onPress} {...props}>
        {image?
          <ImageDiv> 
            <Image source={image} resizeMode="cover" style={styles.image} />
          </ImageDiv>
        : <></>}
        <TextContainer >
            <TitleDiv>
              {title}
            </TitleDiv>
            <TextDiv>
              {children}
            </TextDiv>
        </TextContainer >
      </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  }
});

export default Notification;
