import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Player = ({ route, id }) => {

    const [lineup1, setLineup1] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getResponse1 = async () => {
            try {
                const response = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/athletes/${id}?lang=en&region=us`)
                const starters = await response.json()
                setLineup1(starters)

            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        getResponse1()


    }, [])

    if (loading) {
        return <Text>loading</Text>
    }

    if (error) {
        return <Text>error: {error}</Text>
    }

    if (lineup1.headshot) {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: lineup1.headshot.href }} width={20} height={20} />
                <View style={{ width: 10 }}></View>
                <View style={{ width: '65%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{lineup1.shortName}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{lineup1.position.abbreviation}</Text>
                </View>

            </View>
        )
    }
    else {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '15%', height: '5%' }}></View>
                <View style={{ width: 10 }}></View>
                <View style={{ width: '65%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text>{lineup1.shortName}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{lineup1.position.abbreviation}</Text>
                </View>
            </View>
        )
    }
}

export default Player