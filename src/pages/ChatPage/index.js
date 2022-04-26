import React, { useState, useEffect } from 'react';
import {GiftedChat} from 'react-native-gifted-chat'
import {database} from '../../services/firebase'

const ChatPage = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const subscribe = database.collection('chatId').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if(change.type == "added"){
          let data = change.doc.data()
          data.createdAt = data.createdAt.toDate()
          setMessages(prevMessages => {
            GiftedChat.append(prevMessages, data )
          })
        }
      })
    })
    return () => subscribe()
  },[])
  

  const onSend = (messages) => {
    database
    .collection('chatId')
    .doc(Date.now().toString())
    .set(messages[0])
  }

  return( 
    <Container>
      <GiftedChat 
        messages={messages}
        onSend={messages => onSend(messages)}
        // user={__id: user.id}
      />
    </Container>
  )};

export default ChatPage;
