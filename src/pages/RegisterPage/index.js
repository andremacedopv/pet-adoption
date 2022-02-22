import React, { useState } from 'react';
import { Container, Header, ButtonArea, InputArea, Info} from './styles';
import Button from "../../components/Button";
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';
import { ScrollView, Text } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

import { database } from "../../services/firebase"

const RegisterPage = () => {

  const auth = getAuth();

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  async function handleCreateUser() {
    // createUserWithEmailAndPassword(auth, "felipevaz444@gmail.com", "123456")
    // const docRef = await addDoc(collection(database, "users"), {
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // });
  }

  return(
    <ScrollView>
      <Container>
        
        <Info>
          As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar
          o processo de adoção e/ou apadrinhamento, após a formalização do processo.
        </Info>
        
        <Header> INFORMAÇÕES PESSOAIS </Header>
        <InputArea><Input placeholder="Nome Completo" value={name} onChangeText={(e) => {setName(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Idade" value={age} onChangeText={(e) => {setAge(e)}}></Input></InputArea>
        <InputArea><Input placeholder="E-mail" value={email} onChangeText={(e) => {setEmail(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Estado" value={state} onChangeText={(e) => {setState(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Cidade"></Input></InputArea>
        <InputArea><Input placeholder="Endereço"></Input></InputArea>
        <InputArea><Input placeholder="Telefone"></Input></InputArea>
        
        <Header> INFORMAÇÕES DE PERFIL </Header>
        <InputArea><Input placeholder="Nome de usuário"></Input></InputArea>
        <InputArea><Input placeholder="Senha"></Input></InputArea>
        <InputArea><Input placeholder="Confirmação de Senha"></Input></InputArea>
        
        <Header> FOTO DE PERFIL </Header>
        <InputImage/>
        
        <ButtonArea>
          <Button
            onPress={handleCreateUser}
          > FAZER CADASTRO </Button>
        </ButtonArea>

      </Container>
    </ScrollView> 
  )
}

export default RegisterPage;