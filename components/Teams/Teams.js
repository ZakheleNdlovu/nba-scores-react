import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


const Teams = ({ navigation }) => {

    const [team, setTeams] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTeams = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
                const tm = await response.json()
                setTeams(tm.sports[0].leagues[0].teams)
                console.log(team)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getTeams()
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
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', height: '100%' }}>
                <Text>Error: {error}</Text>
            </View>
        )
    }
    return (
        <View style={styles.frame}>
            <FlatList data={team}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Team Details', { item: item.team })}>
                            <View style={{ padding: 2, flexDirection: 'row', alignItems: 'center', borderColor: 'lightgray', borderBottomWidth: 1, borderStyle: 'solid' }}>
                                <View>
                                    <Image source={{ uri: item.team.logos[0].href }} width={70} height={70} />
                                </View>
                                <View style={{ width: 20 }}></View>
                                <View>
                                    <Text>{item.team.displayName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }} />
        </View>

    )
}

export default Teams

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        height: '100%',
        padding: 1
    }
})