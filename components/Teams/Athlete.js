import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Athlete = ({ route }) => {

    const [athlete, setAthlete] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAthlete = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/types/2/athletes/${route.params.item.id}/statistics/0?lang=en&region=us`)
                const player = await response.json()
                setAthlete(player.splits)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getAthlete()
    }, [])

    if (loading) {
        if (route.params.item.headshot) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                    <Image source={{ uri: route.params.item.headshot.href }} width={'100%'} height={'100%'} backgroundColor={'white'} />
                </View>
            )
        }
        else {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                    <Image source={{ uri: 'https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg' }} width={'100%'} height={'100%'} backgroundColor={'white'} />
                </View>
            )
        }

    }
    if (error) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    if (athlete.categories) {
        if (route.params.item.headshot) {
            return (
                <View>
                    <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', justifyContent: 'space-evenly' }}>
                        <Image source={{ uri: route.params.item.headshot.href }} width={170} height={170} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{route.params.item.displayName}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Weight: {route.params.item.displayWeight}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Height: {route.params.item.displayHeight}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Age: {route.params.item.age} years old</Text>
                    </View>
                    <View style={{ width: '100%', paddingLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Statistics</Text>
                    </View>
                    <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ padding: 5, alignItems: 'center' }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[2].stats[30].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[2].stats[30].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[2].stats[32].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[2].stats[32].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[1].stats[13].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[1].stats[13].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[0].stats[6].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[0].stats[6].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[0].stats[5].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[0].stats[5].displayValue}</Text>
                        </View>

                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <View style={{ width: '100%', height: '50%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', justifyContent: 'space-evenly' }}>
                        <Image source={{ uri: 'https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg' }} width={170} height={170} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{route.params.item.displayName}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Weight: {route.params.item.displayWeight}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Height: {route.params.item.displayHeight}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Age: {route.params.item.age} years old</Text>
                    </View>
                    <View style={{ width: '100%', paddingLeft: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Statistics</Text>
                    </View>
                    <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ padding: 5, alignItems: 'center' }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[2].stats[30].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[2].stats[30].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[2].stats[32].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[2].stats[32].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[1].stats[13].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[1].stats[13].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[0].stats[6].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[0].stats[6].displayValue}</Text>
                        </View>
                        <View style={{ padding: 5 }}>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20 }}>{athlete.categories[0].stats[5].shortDisplayName}</Text>
                            <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 17 }}>{athlete.categories[0].stats[5].displayValue}</Text>
                        </View>

                    </View>
                </View>
            )
        }

    }
    else {
        return (
            <View>
                <View style={{ width: '100%', height: 250, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', justifyContent: 'space-evenly' }}>
                    <Image source={{ uri: route.params.item.headshot.href }} width={170} height={170} />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{route.params.item.displayName}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Weight: {route.params.item.displayWeight}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Height: {route.params.item.displayHeight}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Age: {route.params.item.age} years old</Text>
                </View>
                <View style={{ width: '100%', paddingLeft: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Statistics</Text>
                </View>
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>No stats available</Text>
                </View>
            </View>
        )
    }


}

export default Athlete