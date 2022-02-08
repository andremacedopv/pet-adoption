import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, InputArea, ButtonArea, SocialArea } from './styles';
import { Entypo } from '@expo/vector-icons';

const LoginPage = () => {
  return( 
    <Container>
      <InputArea>
        <Input placeholder="Nome de usuário"></Input>
        <Input placeholder="Senha" secureTextEntry={true}></Input>
      </InputArea>
      <ButtonArea>
        <Button>ENTRAR</Button>
      </ButtonArea>
      <SocialArea>
        <Button 
          type="facebook"
          Icon={() => <Entypo name="facebook" size={20} color="white" />}
        >
          ENTRAR COM FACEBOOK
        </Button>
        <Button
          type="google"
          Icon={() => <Entypo name="google-" size={20} color="white" />}
        >
          ENTRAR COM GOOGLE
        </Button>
      </SocialArea>
    </Container>
  )};

export default LoginPage;
