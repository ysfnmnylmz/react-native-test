import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import { HomeScreen, SettingsScreen} from './src/App/Pages/index';

const Tab = createBottomTabNavigator();

export default function App() {
  let backgroundColor;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'tomato'} barStyle={'light-content'} hidden={false} translucent={false} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const iconType = 'foundation'

            if (route.name === 'Home') {
              iconName = focused ? 'heart' : 'heart';
              backgroundColor = focused ? 'gray' : 'white';
            } else if (route.name === 'First') {
              iconName = focused ? 'die-one' : 'die-one';
              backgroundColor = focused ? 'gray' : 'white';
            }

            return <Icon type={iconType} name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          activeBackgroundColor: 'rgba(0,0,0,.1)'
        }}
      >
        <Tab.Screen barStyle={{backgroundColor}} name="Home" component={HomeScreen} />
        <Tab.Screen name="First" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
