import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import store from '../store/store';
import { Provider } from 'react-redux';
import HomeScreen from './home';


const Stack = createNativeStackNavigator();

export const CounterApp = ()=> {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

// export default counterApp;
