import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function SignOption() {
  return (
    <View style={styles.Container}  >
        <Image style={styles.SignOptionImg} source={require('../../assets/SignOption/apple.png')}/>
        <Image style={styles.SignOptionImg} source={require('../../assets/SignOption/google.png')}/>
        <Image style={styles.SignOptionImg} source={require('../../assets/SignOption/facebook.png')}/>

    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10,

    },
    SignOptionImg:{
        resizeMode:'contain',
        width:50,
        height:50,
        margin:5
    }
})