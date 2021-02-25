import React from 'react';
import Form from './Form';
import ShowVols from './ShowVols';
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{title: ''}}>
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="ShowVols" component={ShowVols} />
        </Stack.Navigator>
    )

}
export default Home;