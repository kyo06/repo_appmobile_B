import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { RadioButton, Checkbox, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const Form = () => {

    const [value, setValue] = React.useState('allerRetour');
    const [checked, setChecked] = React.useState(false);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const handleForm = () => {

    }

    return (
        <View style={styles.view}>
            <RadioButton.Group style={styles.radio} onValueChange={(value) => setValue(value)} value={value}>
                <RadioButton.Item label="Aller-retour" value="allerRetour" />
                <RadioButton.Item label="Aller-simple" value="allerSimple" />
                <RadioButton.Item label="Multi-destinations" value="multiDestinations" />
            </RadioButton.Group>
            <Text>De :</Text>
            <TextInput style={styles.textInput} placeholder="Lyon(LYS)" mode="outlined" />
            <Text>A :</Text>
            <TextInput style={styles.textInput} placeholder="Shanghai(PVG)" />
            <View style={styles.datetime}>
            <Button onPress={showDatepicker}>départ : jour</Button>
                <Button onPress={showTimepicker}>heure</Button>
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="spinner"
                            onChange={onChange}
                        />
                    )}
            </View>
            <View  style={styles.datetime}>
            <Button onPress={showDatepicker}>Retour : jour</Button>
                <Button onPress={showTimepicker}>heure</Button>
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="spinner"
                            onChange={onChange}
                        />
                    )}
            </View>
            <Text>Class de cabinet :</Text>
            <View style={styles.buttonGroup}>
                <Button style={styles.buttonItem} mode="contained" color="green" uppercase={false}>pas cher</Button>
                <Button style={styles.buttonItem} mode="contained" color="blue" uppercase={false}>business</Button>
                <Button style={styles.buttonItem} mode="contained" color="red" uppercase={false}>boss</Button>
            </View>
            <Checkbox.Item label="Vols directs uniquement" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }}
            />
            <Button mode="contained" color="green" onPress={handleForm}>Trouver un vol</Button>
        </View>

    )

}

const styles = StyleSheet.create({
    view: {
        height: 620,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        padding: 20,
        backgroundColor: 'linen'
    },
    radio: {

    },
    datetime: {
        flexDirection: 'row'
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5,
        marginVertical: 10
    },
    buttonGroup: {
        flexDirection: 'row'
    },
    buttonItem: {
        width: 105,
        marginTop: 20
    }
})

export default Form;