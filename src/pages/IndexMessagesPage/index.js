import {useState, useEffect} from "react";
import { database } from "../../services/firebase"
import { ActivityIndicator, FlatList } from "react-native";
import { Container } from './styles';
import Notification from './../../components/Notification'
import { collection, query, where, getDocs} from "firebase/firestore";
import { useUserContext } from "../../contexts/useUserContext";
import img from "../../assets/profile.png"

const IndexMessagesPage = ({navigation}) => {

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const {userData} = useUserContext();

  useEffect(() => {
    setChats([]);
    if(userData){
    let q = query(collection(database, 'groups'), where('users', 'array-contains', userData.uid))
    getDocs(q)
    .then((querySnapshot) => {      
      querySnapshot.forEach(documentSnapshot => {
        var data = documentSnapshot.data()
        let user_uid = data.users[0]
        if(user_uid === userData.uid){
          user_uid = data.users[1]
        }
        
        let q2 = query(collection(database, 'users'), where('uid', '==', user_uid))
        getDocs(q2)
        .then((querySnapshot) => {
          querySnapshot.forEach(docSnap => {
            let chat = chats
            chat.push({
              ...docSnap.data(),
              key: user_uid,
            });
            setChats(chat)
          })
        })
      })

      setLoading(false);
    })
  }
  }, [userData]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return(
    <>
    <FlatList
      data={chats}
      renderItem={({ item }) => (
        <Container>
          <Notification type={"chat"} image={img} imagePath={(item.imagePath !== '')? item.imagePath : false} title={`${item.name}`} onPress={() => navigation.navigate("Chat", {requester: item})}>
          </Notification>
        </Container>
      )}
    />
    </>
  )

}

export default IndexMessagesPage;