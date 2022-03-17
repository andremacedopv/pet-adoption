import { Container, Title, TextInfo, ImageLogo, ButtonArea, TextArea} from './styles';
import AppLoading from 'expo-app-loading';
import Logo from '../../../assets/Meau_marca_2.png';
import Button from "../../components/Button";
import { Alert } from "react-native";
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';
import { useUserContext } from "../../contexts/useUserContext";

const InitialPage = ({navigation}) => {

  const {user, logout} = useUserContext();
  
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleLogout = async (e) => {
    e.preventDefault()
    Alert.alert(
      null,
      "Você deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => logout(),
        },
      ],
      {
        cancelable: true,
      }
    );
  }
  
  return(
    <Container>
        <Title>Olá!</Title>
        <TextArea>
            <TextInfo>Bem vindo ao Meau!</TextInfo>
            <TextInfo>Aqui você pode adotar, doar e ajudar</TextInfo>
            <TextInfo>cães e gatos com facilidade.</TextInfo>
            <TextInfo>Qual o seu interesse?</TextInfo>
        </TextArea>
        <ButtonArea>
            <Button type="normal" onPress={() => navigation.navigate("Animais Disponíveis")}>ADOTAR</Button>
        </ButtonArea>
        <ButtonArea>
            <Button type="normal" onPress={() => navigation.navigate("Animais Disponíveis")}>AJUDAR</Button>
        </ButtonArea>
        <ButtonArea>
            <Button type="normal" onPress={() => navigation.navigate("Meus Pets")}>MEUS PETS</Button>
        </ButtonArea>
        <ButtonArea>
          {user? 
            <Button type="normal" onPress={() => navigation.navigate("Cadastro do Animal")}>CADASTRAR ANIMAL</Button>
          :
          <Button type="normal" onPress={() => navigation.navigate("Ops")}>CADASTRAR ANIMAL</Button>
          }
        </ButtonArea>
        <ButtonArea>
            {user? 
              <Button type="link" onPress={handleLogout}>logout</Button>
            :
              <Button type="link" onPress={() => navigation.navigate("Login")}>login</Button>
            }
        </ButtonArea>
        <ImageLogo
            source={Logo}
        ></ImageLogo>
    </Container>
  )
}

export default InitialPage;