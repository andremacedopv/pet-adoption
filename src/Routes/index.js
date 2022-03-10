import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuButton } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterPageOps from '../pages/RegisterPageOps';
import InitialPage from '../pages/InitialPage';
import AnimalRegisterPage from '../pages/AnimalRegisterPage';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#cfe9e5',
                },
                headerTintColor: '#434343',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerLeft: () => (
                    <MenuButton>
                        <Ionicons name="md-menu" size={30} color="#595959" />
                    </MenuButton>
                )
            }}
        >
            <Stack.Screen
                name="Página Inicial"
                component={InitialPage}
                options={{
                    title: "",
                }}
            />            
            <Stack.Screen
                name="SignUp"
                component={RegisterPage}
                options={{
                    title: "Cadastro Pessoal"
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginPage}    
                options={{
                    title: "Login"
                }}
            />
            <Stack.Screen
                name="Cadastro do Animal"
                component={AnimalRegisterPage}
                options={{
                    title: "Cadastro do Animal"
                }}
            />
            <Stack.Screen
                name="Ops"
                component={RegisterPageOps}
                options={{
                    title: ""
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
