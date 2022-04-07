import React, { createContext, useContext, useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import { Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { database } from '../services/firebase';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

const UserContext = createContext();

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
}

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [expoPushToken, setExpoPushToken] = useState('');

    const logout = async () => {
        setUser(null)
        setUserData(null)
    }

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token))
    }, []);

    const login = async ({email, password, navigation}) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            return userCredential.user.uid
        }).then((uid) => {
            var usersRef = collection(database, "users");
            const q = query(usersRef, where("uid", "==", uid))
            return q;
        }).then((q) => {
            const querySnapshot = getDocs(q);
            return querySnapshot;
        }).then((querySnapshot) => {
            var document = querySnapshot.docs[0].data()
            document.id = querySnapshot.docs[0].id
            setUserData(document)
            return document.id;
        }).then((id) => {
            updateDoc(doc(database, "users", id), {
                deviceID: expoPushToken
            })
        })
        .then(() => {
            Alert.alert(
                null,
                "Login feito com sucesso",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate("Página Inicial"),
                    },
                ]
            );
        })
        .catch((error) => {
            Alert.alert("Ops, algo de errado aconteceu. Certifique-se se suas credenciais estão corretas.")
            setUser(null);
            setUserData(null);
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return (
        <UserContext.Provider value={{user, userData, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}

export default UserProvider;