import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const FreeThrow = ({ eventID, teamID, playerID }) => {

    const [ft, setFt] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setFt(res.splits)

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

    if (ft) {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{ft.categories[2].stats[5].displayValue}</Text>
                </View>

            </View>
        )
    }

}

export default FreeThrow