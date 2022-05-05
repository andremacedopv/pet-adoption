import {useState, useEffect} from "react";
import { database } from "../../services/firebase"
import { ActivityIndicator, FlatList } from "react-native";
import { Container } from './styles';
import Notification from './../../components/Notification'
import { useUserContext } from "../../contexts/useUserContext";
import img from "../../assets/placeholder.jpg"

const IndexNotificationPage = ({navigation}) => {

  const [notifications, setNotifications] = useState({});
  const [loading, setLoading] = useState(true);
  const {userData} = useUserContext();

  useEffect(() => {
    if(userData){
    const subscriber = database
      .collection('adoptionRequest')
      .onSnapshot(querySnapshot => {
        const notification = [];
  
        querySnapshot.forEach(documentSnapshot => {
          console.log(userData)
            if(documentSnapshot.data().ownerUid === userData.uid){
              if(documentSnapshot.data().approved === ''){
                 notification.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.id,
                });
              }
            }
        });
  
        setNotifications(notification);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
    }
  }, [userData]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return(
    <FlatList
      data={notifications}
      renderItem={({ item }) => (
        <Container>
          <Notification image={img} title={`${item.petName} tem um pretendente`} onPress={() => navigation.navigate("Requisição de Adoção", {item: item})}>
            {`${item.userName} deseja adotar um animal que você anunciou!`}
          </Notification>
        </Container>
      )}
    />
  )

}

export default IndexNotificationPage;