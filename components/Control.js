import { Text, View } from 'react-native'
import React, { useState } from 'react'
import Nav1 from "./Nav";
import Standings from "./Standings/Standings";
import Navigation from "./Games/Navigation";
import Navigation1 from "./Teams/Navigation";

const ControlAll = () => {
    const [state, setState] = useState(1)

    if (state === 1) {
        return (
            <View style={{ height: '100%', padding: 2, paddingTop: 5, backgroundColor: 'tomato' }}>

                <Navigation />
                <Nav1 setState={setState} />
            </View>
        )
    }

    if (state === 2) {
        return (
            <View style={{ height: '100%', padding: 1, paddingTop: 10, backgroundColor: 'tomato' }}>

                <Standings />
                <Nav1 setState={setState} />
            </View>
        )
    }
    if (state === 3) {
        return (
            <View style={{ height: '100%', padding: 1, paddingTop: 10 }}>

                <Navigation1 />
                <Nav1 setState={setState} />
            </View>
        )
    }

}

export default ControlAll