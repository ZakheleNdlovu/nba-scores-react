import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Players = ({ route, navigation }) => {

    const [players, setPlayers] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${route.params.item.id}/roster`)
                const roster = await response.json()
                setPlayers(roster.athletes)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getPlayers()
    }, [])

    if (loading) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Image source={{ uri: route.params.item.logos[0].href }} width={'100%'} height={'100%'} backgroundColor={'white'} />
            </View>
        )
    }
    if (error) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    return (
        <View>

            <FlatList data={players}
                renderItem={({ item }) => {
                    if (item.headshot) {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Athlete', { item: item })}>
                                <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center', borderColor: `#${route.params.item.color}`, borderBottomWidth: 1, borderStyle: 'solid' }}>
                                    <View style={{ width: '25%', borderColor: `#${route.params.item.alternateColor}`, borderWidth: 1, borderStyle: 'solid', alignItems: 'center', borderRadius: 4, backgroundColor: `#${route.params.item.color}` }}>
                                        <Image source={{ uri: item.headshot.href }} width={70} height={70} />
                                    </View>
                                    <View style={{ width: '50%', padding: 8 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.displayName}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ textDecorationLine: 'underline' }}>{item.position.displayName}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Athlete', { item: item })}>
                                <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center', borderColor: `#${route.params.item.color}`, borderBottomWidth: 1, borderStyle: 'solid' }}>
                                    <View style={{ width: '25%', borderColor: `#${route.params.item.alternateColor}`, borderWidth: 1, borderStyle: 'solid', alignItems: 'center', borderRadius: 4, backgroundColor: `#${route.params.item.color}` }}>
                                        <Image source={{ uri: 'https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg' }} width={70} height={70} />
                                    </View>
                                    <View style={{ width: '50%', padding: 8 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.displayName}</Text>
                                    </View>
                                    <View>
                                        <Text style={{ textDecorationLine: 'underline' }}>{item.position.displayName}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }} />

        </View>
    )
}

export default Players