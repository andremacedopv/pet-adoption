import {useState, useEffect} from "react";
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Container } from './styles';
import Notification from './../../components/Notification'
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import img from "../../assets/placeholder.jpg"

const IndexNotificationPage = ({}) => {

  return(
    <ScrollView>
      <Container>
        <Notification image={img} title="Rex tem um pretendente" >
          José Silva desenha adotar um cachorro que você anunciou!
        </Notification>
        <Notification image={img} title="Fofinho tem um pretendente" >
          Alexandre da Costa desenha adotar um gato que você anunciou!
        </Notification>
      </Container>
    </ScrollView>
  )

}

export default IndexNotificationPage;