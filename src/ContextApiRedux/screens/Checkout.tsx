import * as React from 'react';
import { View, Text,TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { } from '../store/ProductSlice';

function Checkout() {
    const products = useSelector((state:any) => state.products);
    return (
        <FlatList
            data={products}
            renderItem={({item}) => {
                return (
                    <View style={{margin: 10, flexDirection: 'row', borderColor:"gray", borderWidth:1, padding:7}}>
                        <View style={{flex: 2}}>
                            <Text
                            style={{fontSize: 20, fontWeight: 'bold'}}
                            numberOfLines={1}>
                            {item.title}
                            </Text>
                        </View>
                    </View>
                );
            }}
    />

    )
}

export default Checkout