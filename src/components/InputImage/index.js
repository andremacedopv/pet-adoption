import React from 'react';
import { Container, TextImage} from './styles';
import { Ionicons } from '@expo/vector-icons'; 

const InputImage = ({onPress, size, imageSent = false, props}) => {
  return (
      <Container size={size} onPress={onPress} {...props}>
        {
          imageSent ?
          <>
            <Ionicons name="checkmark-outline" size={28} color="#595959" />
            <TextImage>  
              foto adicionada
            </TextImage>
          </>
          :
          <>
            <Ionicons name="add-circle-outline" size={28} color="#595959" />
            <TextImage>  
              adicionar foto
            </TextImage>
          </>
        }
        
      </Container>
  );
};

export default InputImage;
