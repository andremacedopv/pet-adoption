import React from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { MenuButton, DrawerContainer, ProfileArea, ImageContainer, RoutesArea, LinkButton, LinkText, DivisionText } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import LoginPage from '../pages/LoginPage';
import IndexAdoptPage from '../pages/IndexAdoptPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterPageOps from '../pages/RegisterPageOps';
import InitialPage from '../pages/InitialPage';
import AnimalRegisterPage from '../pages/AnimalRegisterPage';
import MyPetsPage from '../pages/MyPetsPage';
import AdoptAnimalPage from '../pages/AdoptAnimal';
import AdoptionRequest from '../pages/AdoptionRequest';
import IndexNotificationPage from '../pages/IndexNotificationPage';
import { useUserContext } from "../contexts/useUserContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import profileImg from "../assets/profile.png";
import ChatPage from '../pages/ChatPage';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    icon: {
        paddingRight: 5,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
});

function CustomDrawerContent(props) {

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
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: '#88C9BF' }}>
        <DrawerContainer>
            <ProfileArea>
                {userData? <>
                    <ImageContainer>
                        {userData.imagePath?
                            <Image source={uri} resizeMode="cover" style={styles.image} />
                        :
                            <Image source={profileImg} resizeMode="cover" style={styles.image} />
                        }
                    </ImageContainer>
                    <LinkButton>
                        <LinkText>{userData.name}</LinkText>
                    </LinkButton>
                </>
                :
                <>
                </>
                }
            </ProfileArea>
            <RoutesArea>
                <LinkButton onPress={() => {
                    props.navigation.navigate('Página Inicial')}}>
                    <Ionicons name="md-home" size={18} color="#595959" style={styles.icon}/>
                    <LinkText>Página Inicial</LinkText>
                </LinkButton>
                {user? 
                <>
                    <DivisionText>Sua Área</DivisionText>
                    <LinkButton onPress={() => {
                        props.navigation.navigate('Meus Pets')}}>
                        <LinkText>Meus Pets</LinkText>
                    </LinkButton>
                    <LinkButton onPress={() => {
                        props.navigation.navigate('Cadastro do Animal')}}>
                        <LinkText>Cadastro de Animal</LinkText>
                    </LinkButton>
                </>
                :
                <>
                    <LinkButton onPress={() => {
                    props.navigation.navigate('Login')}}>
                        <LinkText>Login</LinkText>
                    </LinkButton>
                    <LinkButton onPress={() => {
                    props.navigation.navigate('SignUp')}}>
                        <LinkText>Cadastro</LinkText>
                    </LinkButton>
                </>
                }
                <DivisionText>Animais Disponíveis</DivisionText>
                <LinkButton onPress={() => {
                    props.navigation.navigate("Animais Disponíveis", {getItens: 'adoption'})}}>
                    <LinkText>Adoção</LinkText>
                </LinkButton>
                <LinkButton onPress={() => {
                    props.navigation.navigate("Animais Disponíveis", {getItens: 'help'})}}>
                    <LinkText>Ajuda</LinkText>
                </LinkButton>
                <LinkButton onPress={() => {
                    props.navigation.navigate("Animais Disponíveis", {getItens: 'sponsorship'})}}>
                    <LinkText>Apradinhamento</LinkText>
                </LinkButton>
            </RoutesArea>
        </DrawerContainer>
      </DrawerContentScrollView>
    );
  }

const Routes = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#cfe9e5',
                },
                headerTintColor: '#434343',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerLeft: () => (
                    <MenuButton onPress={() => navigation.openDrawer()}>
                        <Ionicons name="md-menu" size={30} color="#595959" />
                    </MenuButton>
                ),
                headerRight: () => (
                    <MenuButton onPress={() => navigation.navigate('Notificações')}>
                        <Ionicons style={{marginRight: 10}} name="md-notifications-outline" size={25} color="#595959" />
                        {/* <Ionicons style={{marginRight: 10}} name="md-notifications" size={30} color="#595959" /> */}
                    </MenuButton>
                )
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Página Inicial"
                component={InitialPage}
                options={{
                    title: "Página Inicial",
                }}
            />            
            <Drawer.Screen
                name="SignUp"
                component={RegisterPage}
                options={{
                    title: "Cadastro Pessoal"
                }}
            />
            <Drawer.Screen
                name="Login"
                component={LoginPage}    
                options={{
                    title: "Login"
                }}
            />
            <Drawer.Screen
                name="Cadastro do Animal"
                component={AnimalRegisterPage}
                options={{
                    title: "Cadastro do Animal"
                }}
            />
            <Drawer.Screen
                name="Ops"
                component={RegisterPageOps}
                options={{
                    title: ""
                }}
            />
            <Drawer.Screen
                name="Animais Disponíveis"
                component={IndexAdoptPage}
                options={{
                    title: "Animais Disponíveis"
                }}
            />
            <Drawer.Screen
                name="Meus Pets"
                component={MyPetsPage}
                options={{
                    title: "",
                }}
            />
            <Drawer.Screen
                name="Adotar Animal"
                component={AdoptAnimalPage}
                options={{
                    title: "Adotar Animal",
                }}
            /> 
            <Drawer.Screen
                name="Notificações"
                component={IndexNotificationPage}
                options={{
                    title: "Notificações",
                }}
            /> 
            <Drawer.Screen
                name="Requisição de Adoção"
                component={AdoptionRequest}
                options={{
                    title: "",
                }}
            /> 
            <Drawer.Screen
                name="Chat"
                component={ChatPage}
                options={{
                    title: "",
                }}
            /> 
        </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
