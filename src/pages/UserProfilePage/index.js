import {useState, useEffect} from "react";
import Button from './../../components/Button'
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import {Container} from './styles';
import { ActivityIndicator, ScrollView, Alert} from 'react-native';

const UserProfilePage = ({route, navigation}) => {
    useEffect(() => {

    }, []);

    return (
       <ScrollView>
           <Container>
                
           </Container>
       </ScrollView> 
    );
};

export default UserProfilePage;
