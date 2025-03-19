import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'


const BlocksA = ({ eventID, teamID2, playerID }) => {
    const [blocks, setBlocks] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${eventID}/competitions/${eventID}/competitors/${teamID2}/roster/${playerID}/statistics/0?lang=en&region=us`)
                const res = await response.json()
                setBlocks(res.splits)

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

    if (blocks) {
        return (
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12 }}>{blocks.categories[0].stats[0].displayValue}</Text>
                </View>

            </View>
        )
    }
}

export default BlocksA