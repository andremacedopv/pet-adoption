import React, { useState } from 'react';
import { Container, Header, ButtonArea, InputArea, Info} from './styles';
import Button from "../../components/Button";
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';
import { ScrollView, Alert, Image } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import * as ImagePicker from 'expo-image-picker';

import { database } from "../../services/firebase"

const RegisterPage = ({navigation}) => {

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
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  async function handleCreateUser() {

    if (password != passwordConfirmation) {
      Alert.alert("As senhas não batem!")
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      .then(registeredUser => {
        addDoc(collection(database, "users"), {
          uid: registeredUser.user.uid,
          name: name,
          age: age,
          email: email,
          state: state,
          city: city,
          address: address,
          phone: phone,
          username: username
        })
        Alert.alert("Usuário criado com sucesso!")
        navigation.navigate('Login')
      })
    }
    catch {
      Alert.alert("Ocorreu um erro, tente novamente")
    }
    
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
        <InputArea><Input placeholder="Cidade" value={city} onChangeText={(e) => {setCity(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Endereço" value={address} onChangeText={(e) => {setAddress(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Telefone" value={phone} onChangeText={(e) => {setPhone(e)}}></Input></InputArea>
        
        <Header> INFORMAÇÕES DE PERFIL </Header>
        <InputArea><Input placeholder="Nome de usuário" value={username} onChangeText={(e) => {setUsername(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Senha" value={password} onChangeText={(e) => {setPassword(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Confirmação de Senha" value={passwordConfirmation} onChangeText={(e) => {setPasswordConfirmation(e)}}></Input></InputArea>
        
        <Header> FOTO DE PERFIL </Header>
        <InputImage onPress={pickImage}/>
        
        <ButtonArea>
          <Button onPress={handleCreateUser}> 
            FAZER CADASTRO 
          </Button>
        </ButtonArea>

      </Container>
    </ScrollView> 
  )
}

export default RegisterPage;