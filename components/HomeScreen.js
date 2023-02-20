import React from 'react';
import {TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

import Home from './components/Home';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import ProductInfo from './components/ProductInfo';
import CategoryProductList from './components/CategoryProductList';
import CategoriesList from './components/customComponent/CategoriesList';
import MyCartScreen from './components/MyCartScreen';


const Stack = createNativeStackNavigator();

  export default function HomeScreen ({navigation}) {

  return (
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen options={{
      title:'Sign Up'} } name="SignUp" component={SignUp}  />
    <Stack.Screen options={{title:'Sign In'}} name="SignIn" component={SignIn} />
    <Stack.Screen name="Home" component={Home}  options={({ navigation })=>({
        headerRight: () => (
          <TouchableOpacity onPress={ ()=> navigation.navigate("MyCartScreen")} >
          <AntDesign name="shoppingcart" size={25} color="#560bad"  />
          </TouchableOpacity>
        ),
      title:'Home'})}
    
    />
    <Stack.Screen name="ProductInfo" component={ProductInfo}  options={({ navigation }) => ({
         headerRight: () => (
          <TouchableOpacity onPress={ ()=> navigation.navigate("MyCartScreen")} >
          <AntDesign name="shoppingcart" size={25} color="#560bad"  />
          </TouchableOpacity>
        ),
      title:'Product Info'})}/> 
    <Stack.Screen options={{title:'CategoriesList'}} name="CategoriesList" component={CategoriesList} />
    <Stack.Screen options={{title:'Product List'}} name="CategoryProductList" component={CategoryProductList} />
    <Stack.Screen options={{title:'My cart'}} name="MyCartScreen" component={MyCartScreen} />
   </Stack.Navigator>
    </NavigationContainer>
  );}




