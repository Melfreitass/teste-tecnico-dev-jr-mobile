import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import PerfilScreen from './screens/PerfilScreen.js';
import HabilidadesScreen from './screens/HabilidadesScreen.js';
import ProjetosScreen from './screens/ProjetosScreen.js';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                backgroundColor: '#091029',
                borderTopWidth: 0,
                height: 75,
                paddingBottom: 10,
                paddingTop: 10,
        },

            tabBarActiveTintColor: '#B45CFF',
            tabBarInactiveTintColor: '#BDBDBD',
            }}
        >
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="account-outline"
                        color={color}
                        size={size}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Habilidades"
                component={HabilidadesScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="star-outline"
                        color={color}
                        size={size}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Projetos"
                component={ProjetosScreen}
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons
                        name="briefcase-outline"
                        color={color}
                        size={size}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}
