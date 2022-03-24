import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuButton } from './styles';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import LoginPage from '../pages/LoginPage';
import IndexAdoptPage from '../pages/IndexAdoptPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterPageOps from '../pages/RegisterPageOps';
import InitialPage from '../pages/InitialPage';
import AnimalRegisterPage from '../pages/AnimalRegisterPage';
import MyPetsPage from '../pages/MyPetsPage';

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    menuItemsCard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    circleContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
    },
  });

function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.menuContainer}>
          <View
            style={[
              styles.menuItemsCard,
              { backgroundColor: '#fff2df', width: width, height: width },
            ]}>
            <>
              <View
                style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
                <Feather travel name="briefcase" size={25} color="#fbae41" />
                <DrawerItem
                  label="Screen1"
                  labelStyle={{ color: '#fbae41', fontSize: 10 }}
                  onPress={() => {
                    props.navigation.navigate('Cadastro do Animal', { body: 'hi' });
                  }}
                />
              </View>
            </>
            <DrawerItem
              style={{
                position: 'absolute',
                left: 0,
                width: width,
                height: width,
              }}
              label="Article"
              labelStyle={{ color: '#609806' }}
              onPress={() => {
                props.navigation.navigate('Login', { body: 'article' });
              }}
            />
          </View>
          <View
            style={[
              styles.menuItemsCard,
              { backgroundColor: '#EFFFD5', width: width, height: width },
            ]}>
            <View
              style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
              <Feather Medical name="briefcase" size={25} color="#609806" />
            </View>
  
            <DrawerItem
              style={{
                position: 'absolute',
                left: 0,
                width: width,
                height: width,
              }}
              label="Feed"
              labelStyle={{ color: '#609806' }}
              onPress={() => {
                props.navigation.navigate('Página Inicial', { body: 'hello' });
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    );
  }

const Routes = () => {
  return (
    <NavigationContainer>
        {/* <Drawer.Navigator initialRouteName="Home"> */}
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
        </Drawer.Navigator>
        {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default Routes;
