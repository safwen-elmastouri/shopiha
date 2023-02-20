import React from 'react'
import { TouchableOpacity,StyleSheet,Text
} from 'react-native'


const CustomButton =({onPress, text }) =>
{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container} >
        
                 <Text style={styles.text} > {text} </Text>
        </TouchableOpacity>
        
       
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    container :{ 
        backgroundColor:'#560bad',
        justifyContent:'center',
        alignItems:'center', 
        width:'40%',
        height:45,
        borderRadius:10,
        margin:5,
        
     
    },
    text:{
        color:'white',
        fontWeight:'bold'
    }


})