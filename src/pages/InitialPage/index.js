import { Container, Title, TextInfo, ImageLogo, ButtonArea, TextArea} from './styles';
import { Text, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import Logo from '../../../assets/Meau_marca_2.png';
import Button from "../../components/Button";
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';

const InitialPage = ({navigation}) => {
  
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return(
    <Container>
        <Title>Ops!</Title>
        <TextArea>
            <TextInfo>Bem vindo ao Meau!</TextInfo>
            <TextInfo>Aqui você pode adotar, doar e ajudar</TextInfo>
            <TextInfo>cães e gatos com facilidade.</TextInfo>
            <TextInfo>Qual o seu interesse?</TextInfo>
        </TextArea>
        <ButtonArea>
            <Button type="normal">ADOTAR</Button>
        </ButtonArea>
        <ButtonArea>
            <Button type="normal">AJUDAR</Button>
        </ButtonArea>
        <ButtonArea>
            <Button type="normal">CADASTRAR ANIMAL</Button>
        </ButtonArea>
        <ButtonArea>
            <Button type="link" onPress={() => navigation.navigate("Login")}>login</Button>
        </ButtonArea>
        <ImageLogo
            source={Logo}
        ></ImageLogo>
    </Container>
  )
}

export default InitialPage;