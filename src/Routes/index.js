import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import TestPage from '../pages/TestPage';
import { MenuButton } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Teste"
                component={TestPage}
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
