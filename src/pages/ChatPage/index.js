import React, { useState, useEffect, useCallback } from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {database} from '../../services/firebase'
import { collection, addDoc, orderBy, query, onSnapshot, where, getDocs} from "firebase/firestore";
import { useUserContext } from "../../contexts/useUserContext";
import {Container} from './style'

const ChatPage = ({route}) => {

  const [messages, setMessages] = useState([])
  const [group, setGroup] = useState("")
  const requester = route.params.requester

  const { userData } = useUserContext();
  
  console.log(group)

  useEffect(() => {

    let q = query(collection(database, 'groups'), where('users', 'array-contains', userData.uid))
    getDocs(q)
    .then((querySnapshot) => {

      let find = false

      querySnapshot.forEach(documentSnapshot => {
        var data = documentSnapshot.data()
        if(data.users.find(element => element == requester.uid)){
          setGroup(documentSnapshot.id)
          find = true
        }
      })


      if(!find){
        addDoc(collection(database, 'groups'), { users: [userData.uid, requester.uid] })
        .then(result => {
          setGroup(result.id)
        })
      }

    })
    
    q = query(collection(database, 'chats'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
      snapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
      }))
    ));

    return () => {
      unsubscribe();
    };

  },[])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user,} = messages[0]

    addDoc(collection(database, 'chats'), { _id, createdAt,  text, user });
  }, []);

  return( 
    <Container>
      <GiftedChat 
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: userData.uid,
          name: userData.name
        }}
      />
    </Container>
  )};

export default ChatPage;
