import React from "react";
import {
    View ,Button, TextInput,Text,
    TouchableOpacity,Image 
} from "react-native"

import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignOption from "./customComponent/SignOption";
import styles from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup';
import CustomButton from "./customComponent/customButton";

const validation = yup.object({
    fullName:yup.string()
    .required("Enter your name")
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .min(3),
    email:yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required"),
    password:yup
    .string()
    .min(8)
    .required("Password is required"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const Stack = createNativeStackNavigator();

const SignUp=({navigation}) =>{

    return (
        <View style={styles.container} > 
            <View>
   
            </View>
             <View style={styles.viewimg} > 
              <Image source={require('../assets/sign.png')} style={styles.sign}  />      
             </View>
            <Formik
            initialValues={{fullName:'',email :'' , password:'',confirmPassword:''} }
            validationSchema={validation}
            onSubmit={(values,actions) => {
                actions.resetForm()
                console.log(values)



            }}
            >
                {({handleChange,
     handleSubmit,
     values,
     errors,
     isValid,
     
     })=>( 
                    <View style={styles.containerSign}>
                        
                       <Text style={styles.title}>Register
                         </Text>  
                         <TextInput
                         style={styles.input}
                        placeholder='Full name' 
                        placeholderTextColor={'#343a40'}
                        
                        onChangeText={handleChange('fullName')}
                        value={values.fullName}
                        />
                        {errors.fullName &&
                        <Text style={styles.errText}>{errors.fullName}</Text>
       }
                        <TextInput
                         style={styles.input}
                        placeholder='Email address' 
                        placeholderTextColor={'#343a40'}
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        value={values.email}
                        />
                        {errors.email &&
                        <Text style={styles.errText}>{errors.email}</Text>
                        }
                        <TextInput 
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder='Password' 
                        placeholderTextColor={'#343a40'}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        />
                        {errors.password &&
                        <Text style={styles.errText}>{errors.password}</Text>
                        }
                        <TextInput 
                        style={styles.input}
                        placeholder='Confirm your password' 
                        placeholderTextColor={'#343a40'}
                        secureTextEntry={true}
                        onChangeText={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                        />
                        {errors.confirmPassword &&
                        <Text style={styles.errText}>{errors.confirmPassword}</Text>
                        }
                        <View style={{ justifyContent:'center', alignItems:'center'}}>
                        <CustomButton  text={"Sign Up"}
                        disabled={!isValid}
                        onPress={
                           ()=> {handleSubmit
                             navigation.navigate('Home')

                        }} />
                        </View>
                        <Text style={styles.text}>Already have an account <Text onPress={()=>{ navigation.navigate('SignIn')}} style={{color:'red'}} >Sign in </Text> </Text>
                        <SignOption/>
                    </View>
                    
                    
                )}
            </Formik>
        </View>

    )

} 
export default SignUp;

