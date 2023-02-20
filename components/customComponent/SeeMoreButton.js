import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SeeMoreButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} >
        
                 <Text style={styles.text}>See more</Text>
        </TouchableOpacity>
        
  )
}

const styles = StyleSheet.create({
    container :{ 
    backgroundColor:'#560bad',
    justifyContent:'center',
    alignItems:'center', 
    width:'70%',
    height:25,
    borderRadius:10,
    marginBottom:15,
    
     
    },
    text:{
        color:'white',
        textAlign:'center'
          }


})