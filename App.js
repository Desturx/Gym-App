import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks
import StackDiet from './src/components/diet/StackDiet';
import StackHome from './src/components/home/StackHome';
import StackWorkout from './src/components/workout/StackWorkout';

function App () {
  
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>

      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={StackHome}
        />

        {/* <Tabs.Screen
          name="Diet"
          component={StackDiet}
        />

        <Tabs.Screen
          name="Workout"
          component={StackWorkout}
        /> */}
      </Tabs.Navigator>

    </NavigationContainer>
  );
};

export default App;
