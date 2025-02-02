import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Gamestats = ({ route }) => {

    const [lineup, setLineup] = useState([])
    const [lineup1, setLineup1] = useState([])
    const [st, setSt] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getResponse1 = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[0].id}/roster`)
                const starters = await response.json()
                setLineup1(starters.entries)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        const getResponse2 = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[0].id}/roster`)
                const starters = await response.json()
                setLineup(starters.entries)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        getResponse1()
        getResponse2()

    }, [])

    if (loading) {
        return <Text>loading</Text>
    }

    if (error) {
        return <Text>error: {error}</Text>
    }

    return (
        <View style={{ flexDirection: 'row', width: 360 }}>
            <FlatList data={lineup1}
                keyExtractor={({ id }) => lineup1.playerId}
                renderItem={({ item }) => {
                    const getResponse3 = async () => {

                        const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/athletes/${item.playerId}?lang=en&region=us`)
                        const starters = await response.json()
                        setSt(starters)

                    }
                    getResponse3()
                    if (item.didNotPlay === false) {
                        return (
                            <Text>{st.weight}</Text>
                        )
                    }
                }} />

        </View>
    )
}

export default Gamestats