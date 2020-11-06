import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import DietScreen from './DietScreen';
import NewDiet from './NewDiet';
const Stack = createStackNavigator();

const StackDiet = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Diet"
        component={DietScreen}
      />

      <Stack.Screen
        name="Create new diet"
        component={NewDiet}
      />

    </Stack.Navigator>
  );
}

export default StackDiet;