import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const Steals = ({ eventID, teamID, playerID }) => {
    const [steals, setSteals] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setSteals(res.splits)

            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        getStats1()
    }, [])

    if (loading) {
        return <Text>.</Text>
    }

    if (error) {
        return <Text>Error: {error}</Text>
    }

    if (steals) {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{steals.categories[0].stats[2].value}</Text>
                </View>

            </View>
        )
    }
}

export default Steals