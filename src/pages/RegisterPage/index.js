import { Container, Header, ButtonArea, InputArea, Info} from './styles';
import Button from "../../components/Button";
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';
import { ScrollView, Text } from 'react-native';
import { collection, addDoc } from "firebase/firestore";

import { database } from "../../services/firebase"

const RegisterPage = () => {

  async function handleCreateUser() {

    
    const docRef = await addDoc(collection(database, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
  }

  return(
    <ScrollView>
      <Container>
        
        <Info>
          As informações preenchidas serão divulgadas apenas para a pessoa com a qual você realizar
          o processo de adoção e/ou apadrinhamento, após a formalização do processo.
        </Info>
        
        <Header> INFORMAÇÕES PESSOAIS </Header>
        <InputArea><Input placeholder="Nome Completo"></Input></InputArea>
        <InputArea><Input placeholder="Idade"></Input></InputArea>
        <InputArea><Input placeholder="E-mail"></Input></InputArea>
        <InputArea><Input placeholder="Estado"></Input></InputArea>
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