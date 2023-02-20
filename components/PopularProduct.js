import { StyleSheet, Text , View ,Image,FlatList, Pressable} from 'react-native'
import React  from 'react'


import SeeMoreButton from './customComponent/SeeMoreButton';
import { Items } from '../DB/data';
import { useNavigation } from '@react-navigation/native';

export default function PopularProduct() {
  
   
    const navigation=useNavigation();
   
  return (
    <View style={{}} >
        <Text style={styles.title} >Popular Product</Text>
        <FlatList style={{}}  numColumns={2}
            data={Items}
             renderItem={({item}) => (
          <Pressable  style={styles.container} onPress={ ()=> navigation.navigate("ProductInfo", {item} )} >
            <Image source={item.productImage} style={styles.product} />
            <Text  style={styles.name}> {item.productName} </Text>
            <View style={{alignItems:'flex-end',marginRight:20}}>
                <Text style={{color:'red',margin:5,fontWeight:'bold'}} > {item.productPrice} </Text>
                <SeeMoreButton  onPress={ ()=> navigation.navigate("ProductInfo", {item} )}/>
            </View>
            </Pressable>
           
        )}
        />
         <View style={{marginBottom:55}} ></View>
    </View>
 )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        margin:5,
        borderRadius:20,
        width:'45%',
        height:'95%',
        marginTop:5     
    
        
    },
    title:{
        fontSize:20,
        color:'#4361ee',
        fontWeight:'bold',
        margin:5,
        marginBottom:55
    },
    product:{
        resizeMode:'contain',
        width:150,    
        height:170,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },  
    price:{
        fontSize:15,
        fontWeight:'bold',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginTop:15,
        textAlign:'right',
        color:'red'
        
    },
    name:{
        textAlign:'center',
        color:'#4361ee',
        fontSize:15,
        fontWeight:'bold'
    }
    

})