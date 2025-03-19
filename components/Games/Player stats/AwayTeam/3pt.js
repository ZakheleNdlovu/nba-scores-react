import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const ThreeptA = ({ eventID, teamID2, playerID }) => {
    const [assists, setAssists] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID2}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setAssists(res.splits)

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

    if (assists) {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{assists.categories[2].stats[14].value}/{assists.categories[2].stats[13].value}</Text>
                </View>

            </View>
        )
    }
}

export default ThreeptA