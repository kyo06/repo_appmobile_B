import React from 'react';
import styles from './Styles';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import DialogCustum from './DialogCustum';
import data from '../utils/data.json';

const Account = ({ route, navigation }) => {

    if (route.params !== undefined) {
        const { id, departAirport, arriveAirport, departDate, arriveDate, airCompanyId, isVolDirect, travelType } = route.params
        const resaData = data.airlineCompanies[airCompanyId]
        const dd = new Date(departDate)
        const ad = new Date(arriveDate)
        const [showDetail, setShowDetail] = React.useState(false)

        return (
            <SafeAreaView>
                <ScrollView>
                    <Text style={ styles.accoutTitle }>Vos réservations</Text>
                    <Card>
                        <Card.Content>
                            <Title>{ departAirport.name }({ departAirport.IATA }) -- { arriveAirport.name }({ arriveAirport.IATA })</Title>
                            <Paragraph>{ dd.toDateString()} -- {ad.toDateString() }</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: arriveAirport.img }} />
                        <Card.Actions>
                            <Button onPress={() => { setShowDetail(!showDetail ? true : false) }}>{ !showDetail ? "Gérer" : "Masquer" }</Button>
                            <DialogCustum dialogTitle="Attention" dialogContent="Voulez-vous vraiment annler votre réservation ?" buttonValue="Annuler" btnStyle={{ marginRight: -230 }} dialogStyle={{ paddingBottom: 80, marginBottom: 240 }}/>
                        </Card.Actions>
                    </Card>
                    { showDetail &&
                    <Card>
                        <Card.Content style={ styles.card }>
                                <Paragraph>{ resaData.name.toUpperCase() }</Paragraph>
                                <Title style={ styles.horaire }>{ resaData.departTimeAller }   -------{ !isVolDirect ? <Paragraph style={ styles.green }>Direct</Paragraph> : <Paragraph style={ styles.red }>2 escales</Paragraph>}-------   { resaData.arriveTimeAller }</Title>
                                <View style={ styles.iata }>
                                    <Text>{ departAirport.IATA }</Text>
                                    <Text>{ arriveAirport.IATA }</Text>
                                </View>
                                { travelType === "allerRetour" &&
                                    <View>
                                        <Title style={ styles.horaire }>{ resaData.departTimeRetour }   -------{ !isVolDirect ? <Paragraph style={ styles.green }>Direct</Paragraph> : <Paragraph style={ styles.red }>2 escales</Paragraph>}-------   { resaData.arriveTimeRetour }</Title>
                                        <View style={ styles.iata }>
                                            <Text>{ arriveAirport.IATA }</Text>
                                            <Text>{ departAirport.IATA }</Text>
                                        </View>
                                    </View>
                                }
                            </Card.Content>
                        <Card.Actions>
                            <Button>Ete-vous vegan ? Choisir vos repas ...</Button>
                        </Card.Actions>
                    </Card>}
                </ScrollView>
            </SafeAreaView>
        )

    } else {
        return <Text style={ styles.accoutTitle }>Vous n'avez pas de réservation pur le moment</Text>
    }

}

export default Account;