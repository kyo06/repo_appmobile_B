import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const Header = () => {

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Corona Travels</Text>
            <Image source = {require('../assets/images/lion-head.png')}
                   style = {styles.image}/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 40
    },
    image: {
        width: 50,
        height: 50
    }
})

export default Header;