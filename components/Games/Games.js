import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const Games = ({ navigation }) => {

    const [games, setGames] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getGames = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
                const gm = await response.json()
                setGames(gm.events)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getGames()
    }, [])

    if (loading) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Image source={{ uri: 'https://pluspng.com/img-png/nba-logo-vector-png-nba-logo-png-2400.png' }} width={'100%'} height={'100%'} backgroundColor={'white'} />
            </View>
        )
    }
    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        )
    }
    return (

        <View style={{ padding: 1 }}>

            <FlatList data={games}
                renderItem={({ item }) => {
                    if (item.competitions[0].status.type.state === 'pre') {
                        return (
                            <View>
                                <View style={styles.frame}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Game Details', { item: item })}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>{item.competitions[0].venue.fullName} - {item.competitions[0].venue.address.city}</Text>
                                            <Text>{item.competitions[0].status.type.detail}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <View style={{ width: 200, alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                                    <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                                                </View>
                                                <Text>-</Text>
                                            </View>
                                            <Text>vs</Text>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <View style={{ width: 200, alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                                    <Text>{item.competitions[0].competitors[0].team.displayName}</Text>
                                                </View>
                                                <Text>-</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 1 }}></View>
                            </View>
                        )

                    }
                    else if (item.competitions[0].status.type.state === 'in') {
                        return (
                            <View style={styles.frame}>
                                <View style={{ height: 1 }}></View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Game Details', { item: item })}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>{item.competitions[0].venue.fullName} - {item.competitions[0].venue.address.city}</Text>
                                        <Text>{item.competitions[0].status.type.detail}</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                                        <View style={{ width: 200, alignItems: 'center' }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                                <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                                            </View>
                                            <Text>{item.competitions[0].competitors[1].score}</Text>
                                        </View>
                                        <Text>vs</Text>
                                        <View style={{ width: 200, alignItems: 'center' }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                                <Text>{item.competitions[0].competitors[0].team.displayName}</Text>
                                            </View>
                                            <Text>{item.competitions[0].competitors[0].score}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    else if (item.competitions[0].status.type.state === 'post') {
                        return (
                            <View>
                                <View style={styles.frame}>

                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Game Details', { item: item })}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text>{item.competitions[0].venue.fullName} - {item.competitions[0].venue.address.city}</Text>
                                            <Text>{item.competitions[0].status.type.detail}</Text>

                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <View style={{ width: 200, alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                                    <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                                                </View>
                                                <Text>{item.competitions[0].competitors[1].score}</Text>
                                            </View>
                                            <Text>vs</Text>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <View style={{ width: 200, alignItems: 'center' }}>
                                                    <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                                    <Text>{item.competitions[0].competitors[0].team.displayName}</Text>
                                                </View>
                                                <Text>{item.competitions[0].competitors[0].score}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 1 }}></View>
                            </View>
                        )
                    }
                    else if (item.competitions[0].status.type.state === 'halftime') {
                        return (
                            <View style={styles.frame}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Game Details', { item: item })}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>{item.competitions[0].venue.fullName} - {item.competitions[0].venue.address.city}</Text>
                                        <Text>{item.competitions[0].status.type.detail}</Text>
                                        <Text>{item.competitions[0].notes[0].headline}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                                        <View style={{ width: 200, alignItems: 'center' }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <Image source={{ uri: item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                                <Text>{item.competitions[0].competitors[1].team.displayName}</Text>
                                            </View>
                                            <Text>{item.competitions[0].competitors[1].score}</Text>
                                        </View>
                                        <Text>vs</Text>
                                        <View style={{ width: 200, alignItems: 'center' }}>
                                            <View style={{ width: 200, alignItems: 'center' }}>
                                                <Image source={{ uri: item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                                <Text>{item.competitions[0].competitors[0].team.displayName}</Text>
                                            </View>
                                            <Text>{item.competitions[0].competitors[0].score}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }} />

        </View >
    )
}

export default Games

const styles = StyleSheet.create({
    frame: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',

        borderRadius: 5,
        alignItems: 'center'
    }
})