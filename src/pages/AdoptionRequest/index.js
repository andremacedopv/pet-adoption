import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, collection, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container, Image, Title, ImageDiv, TitleDiv, InfoDiv, InfoTitle, Info, ButtonsDiv, ApproveButtons, ButtonDiv } from './styles';
import Button from './../../components/Button'
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const AdoptionRequest = ({route}) => {
  
  let item = route.params.item
  const [requester, setRequester] = useState({})
  const [loading, setLoading] = useState({})

  useEffect(() => {
    var usersRef = collection(database, "users");
    query(usersRef, where("uid", "==", item.userUid))
    .then((q) => {
      console.log("aqui!!!!!")
            const querySnapshot = getDocs(q);
            return querySnapshot;
    }).then((querySnapshot) => {
            var document = querySnapshot.docs[0].data()
            document.id = querySnapshot.docs[0].id
            setRequester(document)
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
          <Info>{requester.name}</Info>
          <InfoTitle>Idade</InfoTitle>
          <Info>{requester.age} anos</Info>
          <InfoTitle>Cidade</InfoTitle>
          <Info>{requester.city} - {requester.state}</Info>
          <InfoTitle>Telefone</InfoTitle>
          <Info>{requester.phone}</Info>
          <InfoTitle>Email</InfoTitle>
          <Info>{requester.email}</Info>
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