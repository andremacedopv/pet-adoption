import React from 'react';
import { Image, StyleSheet } from "react-native";
import {useState, useEffect} from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container, TextContainer, ImageDiv, TitleDiv, TextDiv } from './styles';
import profile from "../../assets/profile.png"
import img from "../../assets/placeholder.jpg"

const Notification = ({type, children, onPress, image, imagePath, title, props}) => {
  const [uri, setUri] = useState("")

  useEffect(() => {
    if(imagePath){
      const storage = getStorage();
      getDownloadURL(ref(storage,`${imagePath}`))
      .then((url) => {
        const src = {
          uri: url,
        }
        setUri(src)
      })
    }
  }, [imagePath]);

  return (
      <Container onPress={onPress} {...props}>
        {imagePath?
          <ImageDiv> 
            <Image source={uri} resizeMode="cover" style={styles.image} />
          </ImageDiv>
        : 
          <ImageDiv> 
            <Image source={type === 'chat'? profile : img} resizeMode="cover" style={styles.image} />
          </ImageDiv>
        }
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
