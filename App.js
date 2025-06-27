import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inside from './screens/Inside';
import Balcony from './screens/Balcony';
import Garden from './screens/Garden';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Μέσα" component={Inside} />
        <Tab.Screen name="Μπαλκόνι" component={Balcony} />
        <Tab.Screen name="Αυλή" component={Garden} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}