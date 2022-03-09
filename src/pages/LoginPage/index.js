import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, InputArea, ButtonArea, SocialArea } from './styles';
import { Entypo } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import { useUserContext } from "../../contexts/useUserContext";

const LoginPage = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(email === ''){
      Alert.alert("Por favor, insira um e-mail")
    } else if(password === ''){
      Alert.alert("Por favor, insira uma senha")
    }

    await login({email, password, navigation})
  }

  return( 
    <Container>
      <InputArea>
        <Input placeholder="Email" value={email} onChangeText={(e) => {setEmail(e)}}></Input>
        <Input placeholder="Senha" value={password} onChangeText={(e) => {setPassword(e)}} secureTextEntry={true}></Input>
      </InputArea>
      <ButtonArea>
        <Button onPress={handleSubmit}> ENTRAR</Button>
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
