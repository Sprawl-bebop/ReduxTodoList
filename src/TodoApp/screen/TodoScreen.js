import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from '../store/store';

import { Provider } from 'react-redux';

import TodoApp from './HomeTodo';

const Stack = createNativeStackNavigator();

function TodoScreen() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Todo'>
                    <Stack.Screen name="Todo" component={TodoApp} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default TodoScreen;