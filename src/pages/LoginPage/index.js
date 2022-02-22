import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, InputArea, ButtonArea, SocialArea } from './styles';
import { Entypo } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserLogin() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Alert.alert("Alert Title")
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    Alert.alert("Toma no cu")
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

  return( 
    <Container>
      <InputArea>
        <Input placeholder="Email" value={email} onChangeText={(e) => {setEmail(e)}}></Input>
        <Input placeholder="Senha" value={password} onChangeText={(e) => {setPassword(e)}} secureTextEntry={true}></Input>
      </InputArea>
      <ButtonArea>
        <Button onPress={handleUserLogin}> ENTRAR</Button>
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
