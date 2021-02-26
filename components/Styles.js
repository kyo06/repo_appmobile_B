import { StyleSheet } from "react-native"

export default StyleSheet.create({
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    },
    HeaderView: {
        marginTop: 30,
        marginBottom: -10,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 40
    },
    formView: {
        height: 550,
        marginVertical: 20,
        padding: 20
    },
    formDatetime: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formDatePicker: {
        flexDirection: 'row',
        marginTop: 10
    },
    dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
    },
    dateInput: {
        marginLeft: 36
    },
    formPicker: {
        height: 40,
        width: 380,
        backgroundColor: 'white',
        marginVertical: 10
    },
    formCheckBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    formBtnSubmit: {
        marginTop: 20
    },
    orangeCard: {
        backgroundColor: 'orange'
    },
    card: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginVertical: 3,
        paddingVertical: 5
    },
    cardAction: {
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20
    },
    horaire: {
        alignSelf: 'center',
        paddingTop: 10
    },
    iata: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 75
    },
    accoutTitle: {
        fontSize: 30,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'darkorange'
    },
    
})