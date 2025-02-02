import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Nav1 = ({ setState }) => {


    return (
        <View style={styles.nav}>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(1)}>
                <Text style={styles.text}>Games</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(2)}>
                <Text style={styles.text}>Standings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}
                onPress={() => setState(3)}>
                <Text style={styles.text}>Teams</Text>
            </TouchableOpacity>


        </View>
    )

}

export default Nav1

const styles = StyleSheet.create({
    nav: {
        height: 40,
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    box: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
