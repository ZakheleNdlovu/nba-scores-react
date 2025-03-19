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
        height: 45,
        flexDirection: 'row',
        paddingBottom: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'tomato',
        width: '100%'
    },
    box: {

        backgroundColor: 'lightblue',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        width: '33%'

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
