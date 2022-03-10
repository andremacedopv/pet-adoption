import React, { createContext, useContext, useState, useEffect } from 'react'
import * as firebase from 'firebase/app'
import { Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from '../services/firebase';

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)

    const logout = async () => {
        setUser(null)
        setUserData(null)
    }

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