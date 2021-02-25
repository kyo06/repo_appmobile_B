import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import data from '../utils/data.json';

const ShowVols = ({ route, navigation }) => {
    const { travelType, departAirport, arriveAirport, departDate, arriveDate } = route.params
    const dd = new Date(departDate)
    const ad = new Date(arriveDate)
    const airComps = data.airlineCompanies
    return (
        <SafeAreaView>
            <ScrollView>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>{departAirport.name}({departAirport.IATA}) -- {arriveAirport.name}({arriveAirport.IATA})</Title>
                        <Paragraph>{dd.toDateString()} -- {ad.toDateString()}</Paragraph>
                    </Card.Content>
                </Card>
                {airComps.map(c => {
                    return (
                        <Card style={{ borderColor: 'grey', borderWidth: 0.5, marginVertical: 3 }}>
                            <Card.Content>
                                <Paragraph>{c.name.toUpperCase()}</Paragraph>
                                <Title style={{ alignSelf: 'center' }}>{c.departTimeAller}   -------------------   {c.arriveTimeAller}</Title>
                                <View style={styles.iata}>
                                    <Text>{departAirport.IATA}</Text>
                                    <Text>{arriveAirport.IATA}</Text>
                                </View>
                                {travelType === "allerRetour" &&
                                    <View>
                                        <Title style={{ alignSelf: 'center' }}>{c.departTimeRetour}   -------------------   {c.arriveTimeRetour}</Title>
                                        <View style={styles.iata}>
                                            <Text>{arriveAirport.IATA}</Text>
                                            <Text>{departAirport.IATA}</Text>
                                        </View>
                                    </View>
                                }
                            </Card.Content>
                            <Card.Actions>
                                <Button title="Réserver" />
                            </Card.Actions>
                        </Card>
                    )
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'orange'
    },
    iata: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 75
    }
})

export default ShowVols;