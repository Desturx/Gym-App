import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import DietScreen from './DietScreen'
const Stack = createStackNavigator();

const StackDiet = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Diet"
        component={DietScreen}
      />

      {/* <Stack.Screen
        name=""
        component={}
      /> */}

    </Stack.Navigator>
  );
}

export default StackDiet;