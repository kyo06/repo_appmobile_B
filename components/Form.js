import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import CheckBox from '@react-native-community/checkbox';
import { RadioButton, Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { Picker } from '@react-native-picker/picker';
import data from '../utils/data.json';

const Form = ({ navigation }) => {

    const [travelType, setTravelType] = useState('allerRetour')
    const [departAirport, setDepartAirport] = useState("");
    const [arriveAirport, setArriveAirport] = useState("");
    const [departDate, setDD] = React.useState(new Date());
    const [arriveDate, setAD] = React.useState(new Date());
    const [checkBox, setCheckBox] = useState(false)
    const cities = data.cities;

    const handleSubmit = () => {
        navigation.navigate('ShowVols', {
            travelType: travelType,
            departAirport: departAirport,
            arriveAirport: arriveAirport,
            departDate: departDate.toString(),
            arriveDate: arriveDate.toString(),
            isVolDirect: checkBox
        })
    }

    return (
        <View style={styles.formView}>
            {/*************************************** type de voyage **************************************/}
            <RadioButton.Group onValueChange={newTravelType => setTravelType(newTravelType)} value={travelType}>
                <RadioButton.Item color="royalblue" label="Aller-retour" value="allerRetour" />
                <RadioButton.Item color="royalblue" label="Aller-simple" value="allerSimple" />
            </RadioButton.Group>

            {/****************************************** airport ******************************************/}
            <Text>De :</Text>
            <Picker
                style={styles.formPicker}
                selectedValue={departAirport}
                onValueChange={(itemValue) =>
                    setDepartAirport(itemValue)
                }>
                {cities.filter(c => c !== arriveAirport).map(i => {
                    return (
                        <Picker.Item key={i.id} label={i.name} value={i} />
                    )
                })}
            </Picker>
            <Text>A :</Text>
            <Picker
                style={styles.formPicker}
                selectedValue={arriveAirport}
                onValueChange={(itemValue) =>
                    setArriveAirport(itemValue)
                }>
                {cities.filter(c => c !== departAirport).map(i => {
                    return (
                        <Picker.Item key={i.id} label={i.name} value={i} />
                    )
                })}
            </Picker>
            {/*************************************** date de voyage **************************************/}
            <View style={styles.formDatePicker}>
                <View>
                    <Text>Aller :</Text>
                    <DatePicker
                        style={{ width: 180 }}
                        date={departDate}
                        mode="date"
                        format="YYYY-MM-DD"
                        minDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={styles.dateIcon, styles.dateInput}
                        onDateChange={(departDate) => setDD(departDate)}
                    />
                </View>
                {travelType === "allerRetour" &&
                    <View>
                        <Text>Retour :</Text>
                        <DatePicker
                            style={{ width: 180 }}
                            date={arriveDate}
                            mode="date"
                            format="YYYY-MM-DD"
                            minDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={styles.dateIcon, styles.dateInput}
                            onDateChange={(arriveDate) => setAD(arriveDate)}
                        />
                    </View>}
            </View>
            <View style={styles.formCheckBox}>
                <CheckBox
                    disabled={false}
                    value={checkBox}
                    onValueChange={(newValue) => setCheckBox(newValue)}
                />
                <Text>Vols avec escales</Text>
            </View>
            <Button style={styles.formBtnSubmit} mode="contained" color="royalblue" onPress={handleSubmit}>Trouver un vol</Button>
        </View>
    )

}

export default Form;