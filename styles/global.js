import  {StyleSheet} from "react-native"
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e9ecef',


    },
    containerSign:{
        flex:1,
        marginTop:1,
        margin:10,
        backgroundColor:'#e9ecef',

    
        },
        
        
    title:{
        fontSize:35,
        textAlign:'center',
        justifyContent:'center',
        color:'#4361ee',
        fontWeight: 'bold',
        textDecorationLine:'underline'
    },
    input:{
        backgroundColor:'#ced4da',
        borderBottomWidth:2,
        borderColor:'#3f37c9',
        borderRadius:10,
        color:'#343a40',
        padding:15,
        fontSize:15,
        margin:5,
    },
    errText:{
        fontSize:10,
        color:'red',
        textAlign:'center',
        marginBottom:5    
    },
    text:{
        marginTop:2,
        textAlign:'center',
        color:'#4361ee'
    },
    sign:{
        resizeMode:'contain',
        width:'50%',
        height:130
        
            
    },
    viewimg:{
        justifyContent: 'center',
        alignItems: 'center',
    }
   
})
export default styles;