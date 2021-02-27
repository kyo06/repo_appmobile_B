import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './Styles';

export const DatePickerTemplete = ({label, value, onDateChange}) => {
    return (
        <View>
            <Text>{label}</Text>
            <DatePicker
                style={{ width: 180 }}
                date={value}
                mode="date"
                format="YYYY-MM-DD"
                minDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={styles.dateIcon, styles.dateInput}
                onDateChange={onDateChange}
            />
        </View>
    )
}