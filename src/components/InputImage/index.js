import React from 'react';
import { Container, TextImage} from './styles';
import { Ionicons } from '@expo/vector-icons'; 

const InputImage = ({onPress, props}) => {
  return (
      <Container onPress={onPress} {...props}>
        <Ionicons name="add-circle-outline" size={28} color="#595959" />
          <TextImage>  
            adicionar foto
          </TextImage>
      </Container>
  );
};

export default InputImage;
