import { StyleSheet,  View, Image,FlatList , Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { categories,Items} from '../../DB/data';
 



export default function CategoriesList() {
    
 
  
    const navigation=useNavigation();
      
  return (
    <View style={styles.container} >

             <FlatList
             horizontal 
             showsHorizontalScrollIndicator={false}
             data={categories}
             renderItem={({item}) => (
              <TouchableOpacity  onPress={ ()=> navigation.navigate("CategoryProductList", {item} )} >
                 <Image  style={styles.ImgCategories} source={item.source}/>
              </TouchableOpacity>
               )}
               />
             
 
    </View>
  )
  
 
 }
 

const styles = StyleSheet.create({
    
    
  
    
    ImgCategories:{
      
      backgroundColor:'#fff',
      resizeMode:'contain',
      width:60,
      height:60,
      alignItems:'center',
      alignSelf:'center',
      margin:5,
      borderRadius:15,
     
    }
})