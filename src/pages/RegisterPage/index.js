import React, { useState } from 'react';
import { Container, Header, ButtonArea, InputArea, Info} from './styles';
import Button from "../../components/Button";
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';
import { ScrollView, Alert, Image } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import * as ImagePicker from 'expo-image-picker';

import { database, storage } from "../../services/firebase"

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
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const storageRef = ref(storage, `users/${new Date().toISOString()}`);
    let snapshot = await uploadBytes(storageRef, blob)
    return(snapshot.metadata.fullPath);
  };

  const createUserInFirestore = async (registeredUser, imagePath) => {
    await addDoc(collection(database, "users"), {
      uid: registeredUser.user.uid,
      imagePath: imagePath,
      name: name,
      age: age,
      email: email,
      state: state,
      city: city,
      address: address,
      phone: phone,
      username: username
    })
  };

  async function handleCreateUser() {

    if (password != passwordConfirmation) {
      Alert.alert("As senhas não batem!")
      return
    }

    try {
      let registeredUser = await createUserWithEmailAndPassword(auth, email, password)
      let imagePath
      if (image == null) {
        imagePath = ""
      }
      else {
        imagePath = await uploadImage();
      }
      
      await createUserInFirestore(registeredUser, imagePath);
      
      Alert.alert("Usuário criado com sucesso!")
      navigation.navigate('Login')
    }
    catch (e) {
      console.log(e)
      Alert.alert("Ocorreu um erro, tente novamente")
    }
    
  };

  return(
    <ScrollView>
      <Container>
        
        <Info>
          As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar
          o processo de adoção e/ou apadrinhamento, após a formalização do processo.
        </Info>
        
        <Header> INFORMAÇÕES PESSOAIS </Header>
        <InputArea><Input placeholder="Nome Completo" value={name} autoCapitalize={'words'} autoCorrect={false} onChangeText={(e) => {setName(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Idade" value={age} keyboardType={"number-pad"} onChangeText={(e) => {setAge(e)}}></Input></InputArea>
        <InputArea><Input placeholder="E-mail" value={email} keyboardType={"email-address"} autoCapitalize={'none'} autoCorrect={false} onChangeText={(e) => {setEmail(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Estado" value={state} onChangeText={(e) => {setState(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Cidade" value={city} onChangeText={(e) => {setCity(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Endereço" value={address} onChangeText={(e) => {setAddress(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Telefone" value={phone} keyboardType={"number-pad"} onChangeText={(e) => {setPhone(e)}}></Input></InputArea>
        
        <Header> INFORMAÇÕES DE PERFIL </Header>
        <InputArea><Input placeholder="Nome de usuário" value={username} autoCapitalize={'none'} autoCorrect={false} onChangeText={(e) => {setUsername(e)}}></Input></InputArea>
        <InputArea><Input placeholder="Senha" value={password} autoCapitalize={'none'} autoCorrect={false} onChangeText={(e) => {setPassword(e)}} secureTextEntry={true}></Input></InputArea>
        <InputArea><Input placeholder="Confirmação de Senha" autoCapitalize={'none'} autoCorrect={false}value={passwordConfirmation} onChangeText={(e) => {setPasswordConfirmation(e)}} secureTextEntry={true}></Input></InputArea>
        
        <Header> FOTO DE PERFIL </Header>
        {
          image == null?
          <InputImage onPress={pickImage}/>
          :
          <InputImage onPress={pickImage} imageSent={true}/>
        }
        
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