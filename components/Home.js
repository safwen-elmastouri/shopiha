import React from "react";
import { View,StyleSheet, SafeAreaView,ScrollView} from "react-native";


import styles from "../styles/global";
import SearchBar from "./customComponent/SearchBar";
import PopularProduct from "./PopularProduct";
import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesList from "./customComponent/CategoriesList";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
const Home=({navigation})=>{
 
    return(
            <ScrollView>
            <SearchBar/>
            <CategoriesList/>
            <PopularProduct/>
            </ScrollView>
    
    )


}
export default Home;

const style= StyleSheet.create({
    container:{
        flex:1
    }

})