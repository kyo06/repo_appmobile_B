import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Button, Text, Alert } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import data from '../utils/data.json';

const ShowVols = ({ route, navigation }) => {
    const { travelType, departAirport, arriveAirport, departDate, arriveDate, isVolDirect } = route.params
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
                        <Card key={c.id} style={{ borderColor: 'grey', borderWidth: 0.5, marginVertical: 3 }}>
                            <Card.Content style={{borderBottomWidth: 0.5, borderBottomColor: 'grey', paddingVertical: 5}}>
                                <Paragraph>{c.name.toUpperCase()}</Paragraph>
                                <Title style={{ alignSelf: 'center', paddingTop: 10 }}>{c.departTimeAller}   -------{!isVolDirect ? <Paragraph style={{color: 'green'}}>Direct</Paragraph> : <Paragraph style={{color: 'red'}}>2 escales</Paragraph>}-------   {c.arriveTimeAller}</Title>
                                <View style={styles.iata}>
                                    <Text>{departAirport.IATA}</Text>
                                    <Text>{arriveAirport.IATA}</Text>
                                </View>
                                {travelType === "allerRetour" &&
                                    <View>
                                        <Title style={{ alignSelf: 'center', paddingTop: 10 }}>{c.departTimeRetour}   -------{!isVolDirect ? <Paragraph style={{color: 'green'}}>Direct</Paragraph> : <Paragraph style={{color: 'red'}}>2 escales</Paragraph>}-------   {c.arriveTimeRetour}</Title>
                                        <View style={styles.iata}>
                                            <Text>{arriveAirport.IATA}</Text>
                                            <Text>{departAirport.IATA}</Text>
                                        </View>
                                    </View>
                                }
                            </Card.Content>
                            <Card.Actions style={{justifyContent: 'space-between', paddingHorizontal: 15}}>
                                <Button title="Réserver" onPress={()=>{
                                                            navigation.navigate('Account', {
                                                                id: 1,
                                                                departAirport: departAirport,
                                                                arriveAirport: arriveAirport,
                                                                departDate: departDate,
                                                                arriveDate: arriveDate,
                                                                airCompanyId: c.id
                                                            })}
                                }/>
                                <Paragraph style={{fontWeight: 'bold', fontSize: 20}}>{c.price} €</Paragraph>
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