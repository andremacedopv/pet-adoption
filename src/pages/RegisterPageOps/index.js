import { Container, TextArea, ButtonArea, Title, TextInfo } from './styles';
import AppLoading from 'expo-app-loading';
import Button from "../../components/Button";
import { useFonts, Courgette_400Regular } from '@expo-google-fonts/courgette';

const RegisterPageOps = () => {
  
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return(
    <Container>
      <Title>Ops!</Title>
      <TextInfo>Você não pode realizar essa ação sem possuir um cadastro</TextInfo>
      <ButtonArea>
        <Button> FAZER CADASTRO </Button>
      </ButtonArea>
      <TextInfo>Já possui Cadastro?</TextInfo>
      <ButtonArea>
        <Button> FAZER LOGIN </Button>
      </ButtonArea>
    </Container>
  )
}

export default RegisterPageOps;