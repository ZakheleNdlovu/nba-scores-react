import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

const GameDetail = ({ route, navigation }) => {

    const [roster, setRoster] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getLineup = async () => {
            try {
                const response2 = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2024/types/${route.params.item.season.type}/teams/${route.params.item.competitions[0].competitors[0].id}/statistics`)
                const team2 = await response2.json()
                setRoster(team2.splits)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }


        getLineup()

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
            <View>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    if (route.params.item.competitions[0].status.type.state === 'pre') {
        return (
            <View style={{ padding: 2 }}>
                <View style={styles.frame}

                >
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].venue.fullName} - {route.params.item.competitions[0].venue.address.city}</Text>
                        <Text>{route.params.item.competitions[0].status.type.detail}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                        <View style={{ width: 200, alignItems: 'center' }}>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>

                            </View>
                            <Text>-</Text>
                        </View>
                        <Text>vs</Text>
                        <View style={{ width: 200, alignItems: 'center' }}>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>

                            </View>
                            <Text>-</Text>
                        </View>
                    </View>
                </View>
                <View></View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Highest rated players</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                        <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.displayName}</Text>
                        <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].displayValue}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.displayName}</Text>
                        <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</Text>
                        </View>
                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Game leaders</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>{route.params.item.competitions[0].competitors[0].leaders[0].displayName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', width: 205 }}>
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                        <View style={{ alignItems: 'center', width: 204 }}>
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>{route.params.item.competitions[0].competitors[0].leaders[1].displayName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', width: 205 }}>
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                        <View style={{ alignItems: 'center', width: 205 }}>
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>{route.params.item.competitions[0].competitors[0].leaders[2].displayName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center', width: 205 }}>
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                        <View style={{ alignItems: 'center', width: 205 }}>
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].value.toFixed(1)}</Text>
                            <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.displayName}</Text>
                        </View>

                    </View>

                </View>

            </View>
        )
    }
    if (route.params.item.competitions[0].status.type.state === 'in') {
        if (route.params.item.competitions[0].competitors[0].leaders) {
            return (
                <View style={{ height: '100%', paddingTop: 3 }}>
                    <View style={styles.frame}

                    >
                        <TouchableOpacity onPress={() => navigation.navigate('Lineup', { item: route.params.item })}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].venue.fullName} - {route.params.item.competitions[0].venue.address.city}</Text>
                                <Text>{route.params.item.competitions[0].status.type.detail}</Text>

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                        <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>

                                    </View>
                                    <Text>{route.params.item.competitions[0].competitors[1].score}</Text>
                                </View>
                                <Text>vs</Text>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                        <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                    </View>
                                    <Text>{route.params.item.competitions[0].competitors[0].score}</Text>
                                </View>

                            </View>
                            <View style={{ padding: 4, alignItems: 'center' }}>
                                <Text>Tap to see full lineup</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingBottom: 5 }}>
                        <ScrollView style={{ height: '26%' }}>
                            <View style={styles.scroll}>
                                <Text>Game stats</Text>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>Total Rebounds</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].statistics[0].displayValue}</Text>
                                    </View>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].statistics[0].displayValue}</Text>
                                    </View>
                                </View>

                                <View style={{ height: 2 }}></View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>Field Goals</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[5].displayValue}%)</Text>
                                    </View>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[5].displayValue}%)</Text>
                                    </View>
                                </View>

                                <View style={{ height: 2 }}></View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>Free Throws</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[6].displayValue}%)</Text>
                                    </View>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[6].displayValue}%)</Text>
                                    </View>
                                </View>

                                <View style={{ height: 2 }}></View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>3 Pointers</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[10].displayValue}%)</Text>
                                    </View>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[10].displayValue}%)</Text>
                                    </View>
                                </View>

                                <View style={{ height: 2 }}></View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text>Assists</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].statistics[14].displayValue.slice(0, -2)}</Text>
                                    </View>
                                    <View style={{ width: 200, alignItems: 'center' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].statistics[14].displayValue.slice(0, -2)}</Text>
                                    </View>
                                </View>

                            </View>

                        </ScrollView>
                        <View style={{ height: 5 }}></View>

                        <ScrollView style={{ height: '50%' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Highest rated players</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.displayName}</Text>
                                    <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].displayValue}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                                    <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.displayName}</Text>
                                    <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Game leaders</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[0].displayName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}</Text>

                                    </View>

                                </View>

                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}</Text>
                                    </View>

                                </View>

                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[1].displayName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.displayName}</Text>
                                    </View>

                                </View>

                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.displayName}</Text>
                                    </View>

                                </View>

                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[2].displayName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.displayName}</Text>
                                    </View>

                                </View>

                                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                                    <View style={{ alignItems: 'center', width: 205 }}>
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].value}</Text>
                                        <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                        <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.displayName}</Text>
                                    </View>

                                </View>

                            </View>
                        </ScrollView>
                    </View>

                </View>
            )
        }
        else {
            return <Text>Game stats will be available soon</Text>
        }
    }
    if (route.params.item.competitions[0].status.type.state === 'haltime') {
        return (
            <View>
                <View style={styles.frame}

                >
                    <TouchableOpacity onPress={() => navigation.navigate('Lineup', { item: route.params.item })}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>{route.params.item.competitions[0].venue.fullName} - {route.params.item.competitions[0].venue.address.city}</Text>
                            <Text>{route.params.item.competitions[0].status.type.detail}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>

                                </View>
                                <Text>{route.params.item.competitions[0].competitors[1].score}</Text>
                            </View>
                            <Text>vs</Text>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                                <Text>{route.params.item.competitions[0].competitors[0].score}</Text>
                            </View>

                        </View>
                        <View style={{ padding: 4, alignItems: 'center' }}>
                            <Text>Tap to see full lineup</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 5 }}>
                    <ScrollView >
                        <View style={styles.scroll}>
                            <Text>Game stats</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Total Rebounds</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[0].displayValue}</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[0].displayValue}</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Field Goals</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[5].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[5].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Free Throws</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[6].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[6].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>3 Pointers</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[10].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[10].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Assists</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[14].displayValue.slice(0, -2)}</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[14].displayValue.slice(0, -2)}</Text>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                    <View style={{ height: 5 }}></View>

                    <View style={{ alignItems: 'center' }}>
                        <Text>Highest rated players</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                            <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.displayName}</Text>
                            <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].displayValue}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                            <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.displayName}</Text>
                            <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>Game leaders</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[0].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}</Text>

                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[1].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[2].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                </View>

            </View>
        )
    }

    if (route.params.item.competitions[0].status.type.state === 'post') {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Lineup', { item: route.params.item })}>
                    <View style={styles.frame}>
                        <View style={{ alignItems: 'center' }}>
                            <Text>{route.params.item.competitions[0].venue.fullName} - {route.params.item.competitions[0].venue.address.city}</Text>
                            <Text>{route.params.item.competitions[0].status.type.detail}</Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 90 }}>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[1].team.logo }} width={25} height={25} />
                                    <Text>{route.params.item.competitions[0].competitors[1].team.displayName}</Text>

                                </View>
                                <Text>{route.params.item.competitions[0].competitors[1].score}</Text>
                            </View>
                            <Text>vs</Text>
                            <View style={{ width: 200, alignItems: 'center' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Image source={{ uri: route.params.item.competitions[0].competitors[0].team.logo }} width={25} height={25} />
                                    <Text>{route.params.item.competitions[0].competitors[0].team.displayName}</Text>
                                </View>
                                <Text>{route.params.item.competitions[0].competitors[0].score}</Text>
                            </View>
                        </View>
                        <View style={{ padding: 4 }}>
                            <Text>Tap to see full lineup</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ paddingBottom: 5 }}>
                    <ScrollView >
                        <View style={styles.scroll}>
                            <Text>Game stats</Text>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Total Rebounds</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[0].displayValue}</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[0].displayValue}</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Field Goals</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[5].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[4].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[3].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[5].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Free Throws</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[6].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[8].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[7].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[6].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>3 Pointers</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[1].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[1].statistics[10].displayValue}%)</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[12].displayValue}/{route.params.item.competitions[0].competitors[0].statistics[11].displayValue} ({route.params.item.competitions[0].competitors[0].statistics[10].displayValue}%)</Text>
                                </View>
                            </View>

                            <View style={{ height: 2 }}></View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>Assists</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[1].statistics[14].displayValue.slice(0, -2)}</Text>
                                </View>
                                <View style={{ width: 200, alignItems: 'center' }}>
                                    <Text>{route.params.item.competitions[0].competitors[0].statistics[14].displayValue.slice(0, -2)}</Text>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                    <View style={{ height: 5 }}></View>

                    <View style={{ alignItems: 'center' }}>
                        <Text>Highest rated players</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>


                            < Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].athlete.displayName}</Text>
                            <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[3].leaders[0].displayValue}</Text>
                            </View>

                        </View>
                        <View style={{ flex: 1, alignItems: 'center', padding: 3 }}>

                            <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.headshot }} width={50} height={50} />
                            <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].athlete.displayName}</Text>
                            <View style={{ alignItems: 'center', backgroundColor: 'lightgray' }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[3].leaders[0].displayValue}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>Game leaders</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[0].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[0].leaders[0].athlete.displayName}</Text>

                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[0].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[1].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[1].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[1].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{route.params.item.competitions[0].competitors[0].leaders[2].displayName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[1].leaders[2].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ alignItems: 'center', width: 205 }}>
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].value}</Text>
                                <Image source={{ uri: route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.headshot }} width={50} height={50} />
                                <Text>{route.params.item.competitions[0].competitors[0].leaders[2].leaders[0].athlete.displayName}</Text>
                            </View>

                        </View>

                    </View>
                </View>

            </View >
        )
    }
}

export default GameDetail

const styles = StyleSheet.create({
    frame: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        height: '23%',
        borderRadius: 5,
        alignItems: 'center',
        padding: 4
    },
    scroll: {
        alignItems: 'center'
    }
})