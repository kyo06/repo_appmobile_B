import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const Header = () => {

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Corona Travels</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    view: {
        marginTop: 30,
        marginBottom: -10,
        alignItems: 'center'
    },
    title: {
        fontSize: 40
    }
})

export default Header;