import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Games from './Games'
import GameDetail from './GameDetail'
import LineUp from './LineUp'
import Gamestats from './Gamestats'


const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Games} options={{ headerShown: false }} />
                <Stack.Screen name='Game Details' component={GameDetail} options={{ headerShown: false }} />
                <Stack.Screen name='Lineup' component={LineUp} options={{ headerShown: false }} />
                <Stack.Screen name='Player Stats' component={Gamestats} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation