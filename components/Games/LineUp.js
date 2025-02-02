import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const LineUp = ({ route, navigation }) => {

    const [stats, setStats] = useState([])
    const [stats1, setStats1] = useState([])
    const [player, setPlayer] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[1].id}/roster`)
                const res = await response.json()
                setStats(res.entries)
                console.log(stats)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        const getStats1 = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[0].id}/roster`)
                const res = await response.json()
                setStats1(res.entries)

            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        getStats()
        getStats1()


    }, [])


    return (
        <View style={{ height: '100%' }}>
            <View>
                <Text>Tap player to see stats</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

                <View style={{ width: '48%' }}>
                    <FlatList data={stats} renderItem={({ item }) => {
                        const i = 1

                        if (item.starter) {
                            return (
                                <View>
                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 50 }}>
                                        <TouchableOpacity>
                                            <Text>{item.displayName}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ height: 1 }}></View>
                                </View>
                            )
                        }
                    }} />
                    <View style={{ width: '100%', borderColor: 'black', borderBottomWidth: 2, borderStyle: 'dotted' }}></View>
                    <FlatList data={stats} renderItem={({ item }) => {
                        const i = 1

                        if (!item.starter) {
                            return (
                                <View>
                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 50 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Line ups', { item: item }, { item: route.params.item })}>
                                            <Text>{item.displayName}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ height: 1 }}></View>
                                </View>
                            )
                        }
                    }} />
                </View>

                <View style={{ width: '48%' }}>
                    <FlatList data={stats1} renderItem={({ item }) => {


                        if (item.starter) {
                            return (
                                <View>
                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 50 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Line ups', { item: item }, { item: route.params.item })}>
                                            <Text>{item.displayName}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ height: 1 }}></View>
                                </View>
                            )
                        }
                    }} />
                    <View style={{ width: '100%', borderColor: 'black', borderBottomWidth: 2, borderStyle: 'dotted' }}></View>
                    <FlatList data={stats1} renderItem={({ item }) => {


                        if (!item.starter) {
                            return (
                                <View>
                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 50 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Line ups', { item: item }, { item: route.params.item })}>
                                            <Text>{item.displayName}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ height: 1 }}></View>
                                </View>
                            )
                        }
                    }} />
                </View>


            </View>
        </View>
    )
}

export default LineUp