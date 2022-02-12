import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuButton } from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterPageOps from '../pages/RegisterPageOps';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
                name="Ops"
                component={RegisterPageOps}
                options={{
                    title: "Cadastrar",
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
        />
        <Stack.Screen
                name="SignUp"
                component={RegisterPage}
                options={{
                    title: "Cadastro Pessoal",
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
        />
            <Stack.Screen
                name="Login"
                component={LoginPage}
                
                options={{
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
        />
            
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
