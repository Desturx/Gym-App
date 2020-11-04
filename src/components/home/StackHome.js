import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './HomeScreen';
const Stack = createStackNavigator();

const StackHome = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      {/* <Stack.Screen
        name=""
        component={}
      /> */}

    </Stack.Navigator>
  );
}

export default StackHome;