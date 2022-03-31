import {useState, useEffect} from "react";
import Button from './../../components/Button'
import { database, storage } from "../../services/firebase"
import { doc, getDoc } from "firebase/firestore";
import {Container, Info, InfoRow, InfoSection, InfoArea, Image, Field, FieldTitle} from './styles';
import { ActivityIndicator, ScrollView, Alert} from 'react-native';

const UserProfilePage = ({route, navigation}) => {
    useEffect(() => {

    }, []);

    return (
       <ScrollView>
           <Container>
                <Image>
                </Image>                
                <InfoArea>
                    <InfoRow>Nome</InfoRow>
                    <InfoSection>
                        <Info>
                            <FieldTitle>NOME COMPLETO</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>IDADE</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>EMAIL</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>LOCALIZAÇÃO</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>ENDEREÇO</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>TELEFONE</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>NOME DE USUÁRIO</FieldTitle>
                            <Field></Field>
                        </Info>
                    </InfoSection>
                    <InfoSection>
                        <Info>
                            <FieldTitle>HISTÓRICO</FieldTitle>
                            </Info>
                    </InfoSection>
                </InfoArea>
                <ButtonArea>
                    <Button>CHAT</Button>
                    <Button>HISTÓRIAS</Button>
                </ButtonArea>
           </Container>
       </ScrollView> 
    );
};

export default UserProfilePage;
