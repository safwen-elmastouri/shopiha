import React from "react";
import {
    View , Button, Image,StyleSheet,
    TextInput , Text,
    TouchableOpacity
} from "react-native"
import { navigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignOption from "./customComponent/SignOption";
import CustomButton from "./customComponent/customButton";
import styles from "../styles/global";
import { Formik } from "formik";
import * as yup from 'yup';

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
   
})

const Stack = createNativeStackNavigator();

const SignIn=({navigation}) =>{

const ForgetPasswordPress= ()=> {
        navigation.navigate('ForgePasswordScreen')}
    return (

    
        <View style={styles.container} > 
          <View style={styles.viewimg} > 
              <Image source={require('../assets/sign.png')} style={styles.sign}  />      
             </View>
            <Formik
            initialValues={{fullName:'', email :'' , password:''} }
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
     handleBlur
     })=>( 
                    <View style={styles.containerSign}>
                       <Text style={styles.title}>Sign in
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
                        onBlur={handleBlur('email')}
                        value={values.email}
                        />
                        {errors.email &&
                        <Text style={styles.errText}>{errors.email}</Text>
                        }
                        <TextInput 
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true} 
                        placeholderTextColor={'#343a40'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        />
                        {errors.password &&
                        <Text style={styles.errText}>{errors.password}</Text>
                        }
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={ styles.text} onPress={ForgetPasswordPress
                            
                        } >
                       Forget password ?</Text>
                            <CustomButton
                            text={"Sign Un"}
                            disabled={!isValid}
                            onPress={
                               ()=> {handleSubmit
                                 navigation.navigate('Home')
                               }
                            }/>
                            </View>    
                        <Text style={styles.text}>Don't have an account <Text style={{color:'red'}} onPress={() => navigation.navigate('SignUp')} > Sign up</Text> </Text>
                        <SignOption/>
                    </View>
                    
                    
                )}
            </Formik>
        </View>

    )

} 
export default SignIn;

