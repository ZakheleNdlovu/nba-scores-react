import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const ReboundsA = ({ eventID, teamID2, playerID }) => {
    const [rebounds, setRebounds] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID2}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setRebounds(res.splits)

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

    if (rebounds) {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{rebounds.categories[1].stats[6].value}</Text>
                </View>

            </View>
        )
    }
}

export default ReboundsA