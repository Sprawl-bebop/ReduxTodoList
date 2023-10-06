import react,{ useEffect, useState } from 'react';
import { View, Text,TouchableOpacity, StyleSheet, Pressable, FlatList, ActivityIndicator} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts, addToCart, removeFromCart} from '../store/ProductSlice';



function Products({navigation}: any) {
    // const myProducts = useSelector((state:any) => state.myProducts);
    const product = useSelector((state:any) => state.products);
    const isLoading = useSelector((state:any) => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => { 
        async function fetchProducts() {
          try {
            // dispatch(loading());
    
            const res = await fetch('https://fakestoreapi.com/products');
            const products = await res.json();
            
    

            // dispatch(loading());

            dispatch(loadProducts(products));
    
            // 1 set products to initial State
            //2 display products list in products screen
          } catch (error: any) {
            // console.log('error', error.response());
            // dispatch(productFailed());
          }
        }
    
        fetchProducts();
        
      }, []);

  return (
    <View style={{flex: 1}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Checkout');
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 26, textAlign: 'right', color:"green", padding:10}}>
          Cart Count: {}
        </Text>
      </Pressable>

      <FlatList
        data={product}
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

              <Pressable
                onPress={() => {
                  dispatch(addToCart(item));
                }}
                style={{
                  backgroundColor: 'blue',
                  width: 100,
                  borderRadius: 10,
                  margin:2,
                  padding:5
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Add
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  dispatch(removeFromCart(item));
                }}
                style={{
                  backgroundColor: 'red',
                  width: 100,
                  borderRadius: 10,
                  padding:5,
                  margin:2
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    flex: 1,
                  }}>
                  Remove
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  )
}

export default Products
