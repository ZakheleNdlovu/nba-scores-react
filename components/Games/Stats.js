import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

const Stats = ({ teamID, eventID, playerID }) => {

    const [stats, setStats] = useState([])
    const [stats1, setStats1] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setStats(res.splits)

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
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setStats1(res.splits)

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

    if (stats) {
        return (
            <View>
                <View>

                    <Text>{stats.categories[2].stats[10].value}</Text>

                </View>

            </View>
        )
    }
}

export default Stats