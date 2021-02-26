import React from 'react';
import styles from "./components/Styles";
import Header from './components/Header';
import Home from './components/Home';
import Account from './components/Account';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
            style: {
              backgroundColor: 'darkorange',
              height: 60
            }
          }}>
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return <Image source={require('./assets/images/home.png')} style={styles.tabIcon} />
              }
            }}
            name="Home"
            component={Home} />
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return <Image source={require('./assets/images/user.png')} style={styles.tabIcon} />
              }
            }}
            name="Account"
            component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}
