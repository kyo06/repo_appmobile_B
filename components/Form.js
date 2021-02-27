import React from 'react';
import styles from './Styles';
import data from '../utils/data.json';
import CheckBox from '@react-native-community/checkbox';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { DatePickerTemplete } from './DatePickerTemplete';
import { RadioButton, Button } from 'react-native-paper';

const Form = ({ navigation }) => {
    
    const cities = data.cities;

    const initForm = {
        travelType: "allerRetour",
        departAirport: "",
        arriveAirport: "",
        departDate: new Date(),
        arriveDate: new Date(),
        checkBox: false
    }
    const [form, setForm] = React.useState(initForm);

    const handleSubmit = () => {
        navigation.navigate('ShowVols', {
            travelType: form.travelType,
            departAirport: form.departAirport,
            arriveAirport: form.arriveAirport,
            departDate: form.departDate.toString(),
            arriveDate: form.arriveDate.toString(),
            isVolDirect: form.checkBox
        })
    }

    return (
        <View style={styles.formView}>

            {/******************************  choisir type de voyage    **************************************/}

            <RadioButton.Group onValueChange={newTravelType => setForm({...form, travelType: newTravelType})} value={form.travelType}>
                <RadioButton.Item color="royalblue" label="Aller-retour" value="allerRetour" />
                <RadioButton.Item color="royalblue" label="Aller-simple" value="allerSimple" />
            </RadioButton.Group>

            {/*************************  choisir airport de départ et arrivé ***********************************/}

            <Text>De :</Text>
            <Picker
                style={styles.formPicker}
                selectedValue={form.departAirport}
                onValueChange={(itemValue) => setForm({...form, departAirport: itemValue})}>
                {cities.filter(c => c !== form.arriveAirport).map(i => {
                    return (
                        <Picker.Item key={i.id} label={i.name} value={i} />
                    )
                })}
            </Picker>

            <Text>A :</Text>
            <Picker
                style={styles.formPicker}
                selectedValue={form.arriveAirport}
                onValueChange={(itemValue) => setForm({...form, arriveAirport: itemValue})}>
                {cities.filter(c => c !== form.departAirport).map(i => {
                    return (
                        <Picker.Item key={i.id} label={i.name} value={i} />
                    )
                })}
            </Picker>

            {/*****************************    choisir la(les) date(s) de voyage   **************************************/}

            <View style={styles.formDatePicker}>
                <DatePickerTemplete label="Aller :" value={form.departDate} onDateChange={(departDate) => setForm({...form, departDate: departDate})}/>
                {form.travelType === "allerRetour" &&
                <DatePickerTemplete label="Retour :" value={form.arriveDate} onDateChange={(arriveDate) => setForm({...form, arriveDate: arriveDate})}/>}
            </View>

            {/*****************************    choisir vols avec ou sans escales   **************************************/}

            <View style={styles.formCheckBox}>
                <CheckBox
                    disabled={false}
                    value={form.checkBox}
                    onValueChange={(newValue) => setForm({...form, checkBox: newValue})}
                />
                <Text>Vols avec escales</Text>
            </View>

            <Button style={styles.formBtnSubmit} mode="contained" color="royalblue" onPress={handleSubmit}>Trouver un vol</Button>
        </View>
    )

}

export default Form;