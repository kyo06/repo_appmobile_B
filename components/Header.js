import React from 'react';
import styles from './Styles';
import {Text, View} from 'react-native';

const Header = () => {

    return (
        <View style={styles.HeaderView}>
            <Text style={styles.headerTitle}>Corona Travels</Text>
        </View>
    )
    
}

export default Header;