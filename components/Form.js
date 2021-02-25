import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    const cities = data.cities;

    const handleSubmit = () => {
        navigation.navigate('ShowVols', {
            travelType: travelType,
            departAirport: departAirport,
            arriveAirport: arriveAirport,
            departDate: departDate.toString(),
            arriveDate: arriveDate.toString()
        })
    }

    return (
        <View style={styles.view}>
            {/*************************************** type de voyage **************************************/}
            <RadioButton.Group onValueChange={newTravelType => setTravelType(newTravelType)} value={travelType}>
                <RadioButton.Item color="royalblue" label="Aller-retour" value="allerRetour"/>
                <RadioButton.Item color="royalblue" label="Aller-simple" value="allerSimple"/>
            </RadioButton.Group>

            {/****************************************** airport ******************************************/}
            <Text>De :</Text>
            <Picker
                selectedValue={departAirport}
                style={{ height: 40, width: 380, backgroundColor: 'white', marginVertical: 10 }}
                onValueChange={(itemValue, itemIndex) =>
                    setDepartAirport(itemValue)
                }>
                {cities.filter(c => c!==arriveAirport).map(i => {
                    return (
                        <Picker.Item label={i.name} value={i} />
                    )
                })}
            </Picker>
            <Text>A :</Text>
            <Picker
                selectedValue={arriveAirport}
                style={{ height: 40, width: 380, backgroundColor: 'white', marginVertical: 10 }}
                onValueChange={(itemValue, itemIndex) =>
                    setArriveAirport(itemValue)
                }>
                {cities.filter(c => c!==departAirport).map(i => {
                    return (
                        <Picker.Item label={i.name} value={i} />
                    )
                })}
            </Picker>
            {/*************************************** date de voyage **************************************/}
            <View style={styles.datePicker}>
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
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(departDate) => setDD(departDate)}
                    />
                </View>
                
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
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(arriveDate) => setAD(arriveDate)}
                    />
                </View>
            </View>

            <Button style={styles.btnSubmit} mode="contained" color="royalblue" onPress={handleSubmit}>Trouver un vol</Button>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        height: 550,
        marginVertical: 20,
        padding: 20
    },
    datetime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        marginVertical: 10
    },
    datePicker: {
        flexDirection: 'row',
        marginTop: 20
    },
    btnSubmit: {
        marginTop: 40
    }
})

export default Form;