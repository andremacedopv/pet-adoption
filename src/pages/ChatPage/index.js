import React, { useState, useEffect, useCallback } from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {database} from '../../services/firebase'
import { collection, addDoc, orderBy, query, onSnapshot} from "firebase/firestore";
import { useUserContext } from "../../contexts/useUserContext";
import {Container} from './style'

const ChatPage = () => {

  const [messages, setMessages] = useState([])
  const { userData } = useUserContext();

  console.log(messages)
  
  useEffect(() => {

    const q = query(collection(database, 'chats'), orderBy('createdAt', 'desc'));
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
