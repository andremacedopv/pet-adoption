import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container } from './styles';
import Notification from './../../components/Notification'
import {ScrollView} from 'react-native';
import img from "../../assets/placeholder.jpg"

const IndexNotificationPage = ({navigation}) => {

  return(
    <ScrollView>
      <Container>
        <Notification image={img} title="Rex tem um pretendente" onPress={() => navigation.navigate("Requisição de Adoção")}>
          José Silva deseja adotar um cachorro que você anunciou!
        </Notification>
        <Notification image={img} title="Fofinho tem um pretendente" >
          Alexandre da Costa deseja adotar um gato que você anunciou!
        </Notification>
      </Container>
    </ScrollView>
  )

}

export default IndexNotificationPage;