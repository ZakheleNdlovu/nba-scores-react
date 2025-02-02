import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Teams from './Teams'
import TeamDetails from './TeamDetails'
import Players from './Players'
import Athlete from './Athlete'

const Stack = createNativeStackNavigator()

const Navigation1 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Teams' component={Teams} options={{ headerShown: false }} />
                <Stack.Screen name='Team Details' component={TeamDetails} options={{ headerShown: false }} />
                <Stack.Screen name='Players' component={Players} options={{ headerShown: false }} />
                <Stack.Screen name='Athlete' component={Athlete} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation1