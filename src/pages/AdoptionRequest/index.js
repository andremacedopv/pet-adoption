import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container, Image, Title, ImageDiv, TitleDiv, InfoDiv, InfoTitle, Info, ButtonsDiv, ApproveButtons, ButtonDiv } from './styles';
import Button from './../../components/Button'
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const AdoptionRequest = ({}) => {

  return(
    <ScrollView>
      <Container>
        <TitleDiv>
          <ImageDiv>
            <Image source={img}></Image>
          </ImageDiv>
          <Title>
            José deseja adotar Rex
          </Title>
        </TitleDiv>
        <InfoDiv>
          <InfoTitle>Nome</InfoTitle>
          <Info>José da Silva</Info>
          <InfoTitle>Idade</InfoTitle>
          <Info>25 anos</Info>
          <InfoTitle>Cidade</InfoTitle>
          <Info>Brasília - DF</Info>
          <InfoTitle>Telefone</InfoTitle>
          <Info>(61) 99999-9999</Info>
          <InfoTitle>Telefone</InfoTitle>
          <Info>email@email.com</Info>
        </InfoDiv>
        <ButtonsDiv>
          <Button>Mais detalhes do Animal</Button>
          <ApproveButtons>
            <ButtonDiv>
              <Button type="approve">
                Aprovar
              </Button>
            </ButtonDiv>
            <ButtonDiv>
              <Button type="google">
                Reprovar
              </Button>
            </ButtonDiv>
          </ApproveButtons>
        </ButtonsDiv>
      </Container>
    </ScrollView>
  )

}

export default AdoptionRequest;