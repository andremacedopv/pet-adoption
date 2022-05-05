import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import {getStorage} from "firebase/storage"
import {useState, useEffect} from "react";
import Button from './../../components/Button'
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import {Container, ButtonArea, ImageContainer, Info, InfoRow, InfoSection, InfoArea,  Field, FieldTitle} from './styles';
import { ActivityIndicator, ScrollView, Alert} from 'react-native';
import { useUserContext } from "../../contexts/useUserContext";
import profileImg from "../../assets/profile.png";

const styles = StyleSheet.create({
    icon: {
        paddingRight: 5,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
});

const UserProfilePage = () => {
    const [uri, setUri] = React.useState()
    const {user, userData, logout} = useUserContext();

    React.useEffect(() => {
        if(userData?.imagePath){
            const storage = getStorage();
            getDownloadURL(ref(storage,userData.imagePath))
                .then((url) => {
                const src = {
                    uri: url,
                }
                setUri(src)
                })
                .catch((e) => {
                    setUri(profileImg)
                    console.log(e)
                })
        }
        else {
            setUri(profileImg)
        }
    }, [userData]);
    return (
       <ScrollView>
           <Container>
                <ImageContainer >
                    {userData.imagePath?
                        <Image source={uri} resizeMode="cover" style={styles.image} />
                    :
                        <Image source={profileImg} resizeMode="cover" style={styles.image} />
                    }
                </ImageContainer >
                <InfoArea>
                    <InfoRow>{userData.name}</InfoRow>
                    <InfoSection>
                        <Info>
                            <FieldTitle>NOME COMPLETO</FieldTitle>
                            <Field>{userData.name}</Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>IDADE</FieldTitle>
                            <Field>{userData.age}</Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>EMAIL</FieldTitle>
                            <Field>{userData.email}</Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>LOCALIZAÇÃO</FieldTitle>
                            <Field>{userData.city} - {userData.state}</Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>ENDEREÇO</FieldTitle>
                            <Field>{userData.address}</Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>NOME DE USUÁRIO</FieldTitle>
                            <Field>{userData.username}</Field>
                        </Info>
                    </InfoSection>
                </InfoArea>
           </Container>
       </ScrollView> 
    );
};

export default UserProfilePage;
