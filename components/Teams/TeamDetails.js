import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const TeamDetails = ({ route, navigation }) => {

    const [info, setInfo] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/types/2/teams/${route.params.item.id}/record`)
                const data = await response.json()
                setInfo(data.items[0].stats)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getInfo()
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
        <View style={styles.frame}>
            <View>
                <TouchableOpacity style={{ height: 200, width: '100%', borderColor: `#${route.params.item.color}`, borderWidth: 2, borderStyle: 'solid', alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Players', { item: route.params.item })}>
                    <Image source={{ uri: route.params.item.logos[0].href }} width={120} height={120} />
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 26, textShadowColor: `#${route.params.item.color}`, textShadowOffset: 1, textShadowRadius: 10 }}>{route.params.item.displayName}</Text>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text>Tap to see roster</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: `#${route.params.item.alternateColor}` }}>
                <View style={{ width: '60%', paddingLeft: 10 }}>
                    <Text style={styles.font}>Team stat</Text>
                </View>
                <View>
                    <Text style={styles.font}>Value</Text>
                </View>
            </View>
            <FlatList data={info.slice().reverse()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <View style={{ width: '60%' }}>
                                <Text>{item.displayName}</Text>
                            </View>
                            <View>
                                <Text>{item.displayValue}</Text>
                            </View>
                        </View>
                    )
                }} />

        </View>
    )
}

export default TeamDetails

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        height: '100%',
        padding: 3
    },
    font: {
        fontWeight: 'bold',
        fontSize: 20
    }
})