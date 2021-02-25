import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import data from '../utils/data.json';

const Account = ({ route, navigation }) => {

    if (route.params !== undefined) {
        const { id, departAirport, arriveAirport, departDate, arriveDate, airCompanyId } = route.params
        //const resaData = data.airlineCompanies[airCompanyId]
        const dd = new Date(departDate)
        const ad = new Date(arriveDate)

        return (
            <View>
                <Text style={{ fontSize: 30, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10, color: 'darkorange' }}>Vos réservations</Text>
            <Card>
                <Card.Content>
                    <Title>{departAirport.name}({departAirport.IATA}) -- {arriveAirport.name}({arriveAirport.IATA})</Title>
                    <Paragraph>{dd.toDateString()} -- {ad.toDateString()}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: arriveAirport.img }} />
                <Card.Actions style={{ justifyContent: 'space-between' }}>
                    <Button>Gérer</Button>
                    <Button>Annuler</Button>
                </Card.Actions>
            </Card>
            </View>
        )
        
    } else {
        return <Text>Aucune réservation</Text>
    }

}

export default Account;