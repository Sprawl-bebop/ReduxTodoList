import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from '../../ContextApiRedux/store/Store';

import Products from '../screens/Products';
import Checkout from '../screens/Checkout';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

function ProductMain() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Products'>
                    <Stack.Screen name="Products" component={Products} />
                    <Stack.Screen name="Checkout" component={Checkout} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default ProductMain;