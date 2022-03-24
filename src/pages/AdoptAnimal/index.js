import {useState} from "react";
import { database, storage } from "../../services/firebase"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {Container, Image, Title, FieldTitle, Field, InfoArea, InfoSection, Info, InfoRow, ButtonArea} from './styles';
import Button from './../../components/Button'
import { ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const AdoptAnimalPage = () => {
  return(
    <ScrollView>
      <Container>
        <Image source={img}/>

        <InfoArea>
          <Title>Bidu</Title>
          
          <InfoSection>
            <InfoRow>
              <Info>
                <FieldTitle>SEXO</FieldTitle>
                <Field>Macho</Field>  
              </Info>
              <Info>
                <FieldTitle>PORTE</FieldTitle>
                <Field>Médio</Field>  
              </Info>
              <Info>
                <FieldTitle>IDADE</FieldTitle>
                <Field>Adulto</Field>  
              </Info>
            </InfoRow>
            <Info>
              <FieldTitle>LOCALIZAÇÃO</FieldTitle>
              <Field>Samambaia Sul - Distrito Federal</Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <InfoRow>
              <Info>
                <FieldTitle>CASTRADO</FieldTitle>
                <Field>Não</Field>  
              </Info>
              <Info>
                <FieldTitle>FERMIFUGADO</FieldTitle>
                <Field>Sim</Field>  
              </Info>
            </InfoRow>
            <InfoRow>
              <Info>
                <FieldTitle>VACINADO</FieldTitle>
                <Field>Não</Field>  
              </Info>
              <Info>
                <FieldTitle>DOENÇAS</FieldTitle>
                <Field>Nenhuma</Field>  
              </Info>
            </InfoRow>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>TEMPERAMENTO</FieldTitle>
              <Field>Calmo e Dócil</Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>EXIGÊNCIAS DO DOADOR</FieldTitle>
              <Field>Termo de adoção, fotos da casa, visita prévia e acompanhamento durante três meses</Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>MAIS SOBRE BIDU</FieldTitle>
              <Field>Bidu é um cão muito dócil e de fácil convivência. Adora caminhadas e se dá muito bem com crianças. Tem muito medo de raios e de chuva, nesses momentos ele requer mais atenção. Está disponível para adoção pois eu e minha família o encontramos na rua e não podemos mantê-lo em nossa casa. </Field>  
            </Info>
          </InfoSection>

        </InfoArea>

        <ButtonArea>
          <Button>PRETENDO ADOTAR</Button>
        </ButtonArea>

      </Container>
    </ScrollView>
  )

}

export default AdoptAnimalPage;