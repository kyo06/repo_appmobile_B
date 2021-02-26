import React from 'react';
import styles from './Styles';
import data from '../utils/data.json';
import { SafeAreaView, ScrollView, View, Button, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ShowVols = ({ route, navigation }) => {
    const { travelType, departAirport, arriveAirport, departDate, arriveDate, isVolDirect } = route.params
    const dd = new Date(departDate)
    const ad = new Date(arriveDate)
    const airComps = data.airlineCompanies

    return (
        <SafeAreaView>
            <ScrollView>
                <Card style={ styles.orangeCard }>
                    <Card.Content>
                        <Title>{ departAirport.name }({ departAirport.IATA }) -- { arriveAirport.name }({ arriveAirport.IATA })</Title>
                        <Paragraph>{ dd.toDateString() } -- { ad.toDateString() }</Paragraph>
                    </Card.Content>
                </Card>
                { airComps.map(c => {
                    return (
                        <Card style={ styles.card } key={ c.id }>
                            <Card.Content>
                                <Paragraph>{ c.name.toUpperCase() }</Paragraph>
                                <Title style={ styles.horaire }>{ c.departTimeAller }   -------{ !isVolDirect ? <Paragraph style={ styles.green }>Direct</Paragraph> : <Paragraph style={ styles.red }>2 escales</Paragraph> }-------   { c.arriveTimeAller }</Title>
                                <View style={ styles.iata }>
                                    <Text>{ departAirport.IATA }</Text>
                                    <Text>{ arriveAirport.IATA }</Text>
                                </View>
                                { travelType === "allerRetour" &&
                                    <View>
                                        <Title style={ styles.horaire }>{ c.departTimeRetour }   -------{ !isVolDirect ? <Paragraph style={ styles.green }>Direct</Paragraph> : <Paragraph style={ styles.red }>2 escales</Paragraph>}-------   { c.arriveTimeRetour }</Title>
                                        <View style={ styles.iata }>
                                            <Text>{ arriveAirport.IATA }</Text>
                                            <Text>{ departAirport.IATA }</Text>
                                        </View>
                                    </View>
                                }
                            </Card.Content>
                            <Card.Actions style={ styles.cardAction }>
                                <Button title="Réserver" onPress={()=>{
                                                            navigation.navigate('Account', {
                                                                id: 1,
                                                                departAirport: departAirport,
                                                                arriveAirport: arriveAirport,
                                                                departDate: departDate,
                                                                arriveDate: arriveDate,
                                                                airCompanyId: c.id,
                                                                isVolDirect: isVolDirect,
                                                                travelType: travelType
                                                            })}
                                }/>
                                <Paragraph style={ styles.price }>{ c.price } €</Paragraph>
                            </Card.Actions>
                        </Card>
                    )
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

export default ShowVols;