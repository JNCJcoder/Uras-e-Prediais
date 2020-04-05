import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Colors from './config/Theme';
import { Prediais, Uras, Urao } from './pages';

const Tab = createBottomTabNavigator();

export default function Routes() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) => {
            let iconName;

            if (route.name === 'Prediais') {
              iconName = 'business';
            } else {
              iconName = 'chrome-reader-mode';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.secondary,
        }}>
        <Tab.Screen name="Prediais" component={Prediais} />
        <Tab.Screen name="Uras" component={Uras} />
        <Tab.Screen name="Urao" component={Urao} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
