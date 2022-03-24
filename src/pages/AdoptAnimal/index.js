import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {Container, Image, Title, FieldTitle, Field, InfoArea, InfoSection, Info, InfoRow, ButtonArea} from './styles';
import Button from './../../components/Button'
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const AdoptAnimalPage = ({route, navigation}) => {

  let id = route.params.id
  const [pet, setPet] = useState({})
  const [uri, setUri] = useState("")
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const petsRef = doc(database, "pets", id);
    const docSnap = getDoc(petsRef).then((docSnap) => {
      let newPet = docSnap.data()
      setPet(newPet);
      if(newPet.imagePath){
        const storage = getStorage();
          getDownloadURL(ref(storage,`${newPet.imagePath}`))
            .then((url) => {
              const src = {
                uri: url,
              }
              setUri(src)
            })
            .catch((e) => {
              console.log(e)
            })
        }
        else {
          setUri(img);
        }
      setLoading(false)
    }) 
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return(
    <ScrollView>
      <Container>
        <Image source={uri}/>

        <InfoArea>
          <Title>{pet.name}</Title>
          
          <InfoSection>
            <InfoRow>
              <Info>
                <FieldTitle>SEXO</FieldTitle>
                <Field>{pet.sex}</Field>  
              </Info>
              <Info>
                <FieldTitle>PORTE</FieldTitle>
                <Field>{pet.size}</Field>  
              </Info>
              <Info>
                <FieldTitle>IDADE</FieldTitle>
                <Field>{pet.age}</Field>  
              </Info>
            </InfoRow>
            <Info>
              <FieldTitle>LOCALIZAÇÃO</FieldTitle>
              <Field>{pet.state}</Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <InfoRow>
              <Info>
                <FieldTitle>CASTRADO</FieldTitle>
                <Field>{pet.health.castrated ? "Sim" : "Não"}</Field>  
              </Info>
              <Info>
                <FieldTitle>FERMIFUGADO</FieldTitle>
                <Field>{pet.health.verms ? "Sim" : "Não"}</Field>  
              </Info>
            </InfoRow>
            <InfoRow>
              <Info>
                <FieldTitle>VACINADO</FieldTitle>
                <Field>{pet.health.vaccinated ? "Sim" : "Não"}</Field>  
              </Info>
              <Info>
                <FieldTitle>DOENÇAS</FieldTitle>
                <Field>{pet.health.illness ? pet.health.illness : "Nenhuma"}</Field>  
              </Info>
            </InfoRow>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>TEMPERAMENTO</FieldTitle>
              <Field>
                {pet.temper.calm && "Calmo "}
                {pet.temper.guard && "Guarda "}
                {pet.temper.timid && "Tímido "}
                {pet.temper.loving && "Amoroso "}
                {pet.temper.playful && "Brincalhão "}
                {pet.temper.lazy && "Preguiçoso"}
              </Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>EXIGÊNCIAS DO DOADOR</FieldTitle>
              <Field>
                {pet.adoptionOptions.adoptionTerms && "Termo de adoção "}
                {pet.adoptionOptions.housePhotos && "Fotos da Casa "}
                {pet.adoptionOptions.visit && "Visita prévia ao animal "}
                {pet.adoptionOptions.postAdoption && "Acompanhamento pós adoção de "}
                {pet.adoptionOptions.postAdoptionOptions.oneMonth && "1 mês"}
                {pet.adoptionOptions.postAdoptionOptions.threeMonths && "3 meses"}
                {pet.adoptionOptions.postAdoptionOptions.sixMonths && "6 meses"}
              </Field>  
            </Info>
          </InfoSection>

          <InfoSection>
            <Info>
              <FieldTitle>MAIS SOBRE {pet.name.toUpperCase()}</FieldTitle>
              <Field>{pet.aboutAnimal}</Field>  
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