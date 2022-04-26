import React, { useState, useEffect, useCallback } from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {database} from '../../services/firebase'
import { useUserContext } from "../../contexts/useUserContext";
import {Container} from './style'

const ChatPage = () => {

  const [messages, setMessages] = useState([])
  const { userData } = useUserContext();
  
  // useEffect(() => {
  //   const subscribe = database.collection('chatId').onSnapshot((snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if(change.type == "added"){
  //         let data = change.doc.data()
  //         data.createdAt = data.createdAt.toDate()
  //         setMessages(prevMessages => {
  //           GiftedChat.append(prevMessages, data )
  //         })
  //       }
  //     })
  //   })
  //   return () => subscribe()
  // },[])

  useEffect(() => {
    setMessages([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
    ])
  }, []);
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  // const onSend = (messages) => {
  //   database
  //   .collection('chatId')
  //   .doc(Date.now().toString())
  //   .set(messages[0])
  // }

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
