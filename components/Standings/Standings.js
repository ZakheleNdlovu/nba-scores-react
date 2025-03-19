import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Standings = () => {

    const [standing, setStandings] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStandings = async () => {
            try {
                const response = await fetch('https://cdn.espn.com/core/nba/standings?xhr=1')
                const rankings = await response.json()
                setStandings(rankings.content)

            } catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getStandings()
    }, []);

    if (loading) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Image source={{ uri: 'https://pluspng.com/img-png/nba-logo-vector-png-nba-logo-png-2400.png' }} width={'100%'} height={'100%'} backgroundColor={'white'} />
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
        <View style={{ padding: 1, height: '94%' }}>
            <View style={{ backgroundColor: 'tomato' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>EASTERN CONFERENCE </Text>
            </View>
            <View style={{ padding: 5, backgroundColor: 'lightblue' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50 }}>
                        <Text>Seed</Text>
                    </View>
                    <View style={{ width: 150 }}>
                        <Text>Team</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>W</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>L</Text>
                    </View>
                    <View style={{ width: 33 }}>
                        <Text>W%</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>GB</Text>
                    </View>
                    <View style={{ width: 35 }}>
                        <Text>STRK</Text>
                    </View>
                </View>
            </View>
            <FlatList data={standing.standings.groups[0].standings.entries} renderItem={({ item }) => {
                return (
                    <View style={{ width: '100%', height: 20, backgroundColor: 'white' }}>

                        <View style={{ flexDirection: 'row', backgroundColor: `#${item.team.color}` }}>
                            <View style={{ width: 40, paddingLeft: 5 }}>
                                <Text>{item.team.seed}</Text>
                            </View>
                            <View style={{ width: 165 }}>
                                <Text>{item.team.displayName}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[0].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[1].displayValue}</Text>
                            </View>
                            <View style={{ width: 35 }}>
                                <Text>{item.stats[2].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[3].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[11].displayValue}</Text>
                            </View>
                        </View>
                    </View>
                )
            }} />
            <View style={{ height: 10 }}></View>
            <View style={{ backgroundColor: 'tomato' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>WESTERN CONFERENCE </Text>
            </View>
            <View style={{ padding: 4, backgroundColor: 'lightblue' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50 }}>
                        <Text>Seed</Text>
                    </View>
                    <View style={{ width: 150 }}>
                        <Text>Team</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>W</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>L</Text>
                    </View>
                    <View style={{ width: 33 }}>
                        <Text>W%</Text>
                    </View>
                    <View style={{ width: 30 }}>
                        <Text>GB</Text>
                    </View>
                    <View style={{ width: 35 }}>
                        <Text>STRK</Text>
                    </View>
                </View>
            </View>
            <FlatList data={standing.standings.groups[1].standings.entries} renderItem={({ item }) => {
                return (
                    <View style={{ width: '100%', height: 20, backgroundColor: 'white' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 40, paddingLeft: 5 }}>
                                <Text>{item.team.seed}</Text>
                            </View>
                            <View style={{ width: 165 }}>
                                <Text>{item.team.displayName}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[0].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[1].displayValue}</Text>
                            </View>
                            <View style={{ width: 35 }}>
                                <Text>{item.stats[2].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[3].displayValue}</Text>
                            </View>
                            <View style={{ width: 30 }}>
                                <Text>{item.stats[11].displayValue}</Text>
                            </View>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
}

export default Standings