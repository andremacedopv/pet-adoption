import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container, Image, Title, ImageDiv, TitleDiv, InfoDiv, InfoTitle, Info, ButtonsDiv, ApproveButtons, ButtonDiv } from './styles';
import Button from './../../components/Button'
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const AdoptionRequest = ({route, navigation}) => {
  
  let item = route.params.item
  const [requester, setRequester] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    const userRef = doc(database, "users", item.userUid);
    const docSnap = getDoc(userRef)
    .then((docSnap) => {
      let request = docSnap.data()
      setRequester(request);
      setLoading(false)
    })
  }, [item]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return(
    <ScrollView>
      <Container>
        <TitleDiv>
          <ImageDiv>
            <Image source={img}></Image>
          </ImageDiv>
          <Title>
            {`${item.userName} deseja adotar ${item.petName}`}
          </Title>
        </TitleDiv>
        <InfoDiv>
          <InfoTitle>Nome</InfoTitle>
          <Info>{requester?.name}</Info>
          <InfoTitle>Idade</InfoTitle>
          <Info>{requester?.age} anos</Info>
          <InfoTitle>Cidade</InfoTitle>
          <Info>{requester?.city} - {requester?.state}</Info>
          <InfoTitle>Telefone</InfoTitle>
          <Info>{requester?.phone}</Info>
          <InfoTitle>Email</InfoTitle>
          <Info>{requester?.email}</Info>
        </InfoDiv>
        <ButtonsDiv>
          <Button onPress={() => navigation.navigate('Adotar Animal', {id: item.petId})}>Mais detalhes do Animal</Button>
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