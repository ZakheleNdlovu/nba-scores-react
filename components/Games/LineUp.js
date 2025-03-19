import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Gamestats from './Gamestats'
import Assists from './Player stats/HomeTeam/Assists'
import Rebounds from './Player stats/HomeTeam/Rebounds'
import FieldGoal from './Player stats/HomeTeam/FieldGoal'
import Steals from './Player stats/HomeTeam/Steals'
import Player from './Player stats/AwayTeam/Player'
import Points from './Player stats/AwayTeam/Points'
import AssistsA from './Player stats/AwayTeam/Assists'
import ReboundsA from './Player stats/AwayTeam/Revounds'
import StealsA from './Player stats/AwayTeam/Steals'
import FieldGoalA from './Player stats/AwayTeam/FieldGoal'
import BlocksA from './Player stats/AwayTeam/Blocks'
import Blocks from './Player stats/HomeTeam/Blocks'
import FreeThrow from './Player stats/HomeTeam/FreeThrow'
import FreeThrowA from './Player stats/AwayTeam/FreeThrow'
import ThreeptA from './Player stats/AwayTeam/3pt'
import Threept from './Player stats/HomeTeam/3pt'


const LineUp = ({ route, navigation }) => {

    const [stats, setStats] = useState([])
    const [stats1, setStats1] = useState([])
    const [player, setPlayer] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[1].id}/roster`)
                const res = await response.json()
                setStats(res.entries)

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
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/events/${route.params.item.competitions[0].id}/competitions/${route.params.item.competitions[0].id}/competitors/${route.params.item.competitions[0].competitors[0].id}/roster`)
                const res = await response.json()
                setStats1(res.entries)

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



    return (
        <View style={{ height: '99%' }}>


            <View style={{ padding: 2, alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '40%' }}>


                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={35} height={35} />
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '45%' }}>
                            <Text>Player</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>PTS</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>AST</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>RB</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>STL</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>BLK</Text>
                        </View>
                        <View style={{ width: '8%' }}>
                            <Text>3PT</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>FT</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text>FG</Text>
                        </View>
                    </View>
                    <FlatList data={stats} renderItem={({ item }) => {

                        if (item.didNotPlay) {
                            return (
                                <View>
                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ width: '46%' }}>
                                            <Player id={item.playerId} />
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>DNP: {item.reason}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        else {
                            return (

                                <View style={{}}>


                                    <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 25, flexDirection: 'row', alignItems: 'center' }}>


                                        <View style={{ width: '44%' }}>
                                            <Gamestats id={item.playerId} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <Points eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <Assists eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <Rebounds eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <Steals eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <Blocks eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '8%' }}>
                                            <Threept eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <FreeThrow eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>
                                        <View style={{ width: '7%' }}>
                                            <FieldGoal eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID={route.params.item.competitions[0].competitors[0].id} />
                                        </View>

                                    </View>

                                    <View style={{ height: 1 }}></View>
                                </View>

                            )
                        }

                    }} />
                    <View style={{ width: '100%', borderColor: 'black', borderBottomWidth: 2, borderStyle: 'solid' }}></View>

                </View>



            </View>


            <View style={{ padding: 2, alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '45%' }}>
                <View style={{ height: '18%' }}>

                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={35} height={35} />
                        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '44%' }}>
                            <Text>Player</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>PTS</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>AST</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>RB</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>STL</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>BLK</Text>
                        </View>
                        <View style={{ width: '8%' }}>
                            <Text style={{ fontSize: 12 }}>3PT</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>FT</Text>
                        </View>
                        <View style={{ width: '7%' }}>
                            <Text style={{ fontSize: 12 }}>FG</Text>
                        </View>
                    </View>

                    <FlatList data={stats1}
                        renderItem={({ item }) => {
                            if (item.didNotPlay) {
                                return (
                                    <View>
                                        <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '46%' }}>
                                                <Player id={item.playerId} />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>DNP: {item.reason}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View>
                                        <View style={{ padding: 6, backgroundColor: 'lightgray', borderRadius: 5, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '43%' }}>
                                                <Player id={item.playerId} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <Points eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} dnp={item.didNotPlay} reason={item.reason} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <AssistsA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <ReboundsA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <StealsA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '8%' }}>
                                                <BlocksA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <ThreeptA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <FreeThrowA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                            <View style={{ width: '7%' }}>
                                                <FieldGoalA eventID={route.params.item.competitions[0].id} playerID={item.playerId} teamID2={route.params.item.competitions[0].competitors[1].id} />
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        }} />
                </View>

            </View>

            <View style={{ height: 1 }}></View>

        </View>

    )
}

export default LineUp