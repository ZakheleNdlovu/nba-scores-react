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
            <View style={{ height: '100%', paddingTop: 7 }}>
                <Nav1 setState={setState} />
                <Navigation />
            </View>
        )
    }

    if (state === 2) {
        return (
            <View style={{ height: '100%', paddingTop: 7 }}>
                <Nav1 setState={setState} />
                <Standings />
            </View>
        )
    }
    if (state === 3) {
        return (
            <View style={{ height: '100%', paddingTop: 7 }}>
                <Nav1 setState={setState} />
                <Navigation1 />
            </View>
        )
    }

}

export default ControlAll