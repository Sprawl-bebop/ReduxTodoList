import * as React from 'react';
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';


function HomeScreen() {
    const counterVal = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{counterVal}</Text>

            <TouchableOpacity 
            onPress={()=>
                dispatch(increment())} 
            style={styles.btn}>
            <Text style={styles.btn_text}> Increment </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>
                dispatch(decrement())}
            style={{ ...styles.btn, backgroundColor: 'blue' }}>
            <Text style={styles.btn_text}> Decrement </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
    },
    title_text:{
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
        color:"blue"
    },
    counter_text:{
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
        color:"#000"
    },
    btn:{
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
    },
});

export default HomeScreen;