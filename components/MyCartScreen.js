import { Image, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesList from "./customComponent/CategoriesList";
import { Provider, useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();
export default function MyCartScreen({route,navigation}) {


    const carts = useSelector(state => state.cart.products);
  
  return (
      <View style={styles.container} >
        <Text> dd </Text>
       

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  },
  productContainer:{
    height:'70%',

  },
  product:{
    flexDirection:'row',
  
  },
  productImage:{
    resizeMode:'contain',
    width:'40%'
  },
  productsDetails:{
    marginTop:25
  }




})