import { StyleSheet, Text , View ,
   Image , FlatList , 
  Animated , Dimensions, 
  ScrollView, TouchableOpacity,Button} from 'react-native'
import React, {useState , useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Items } from '../DB/data'
import { addToCart } from '../redux/cartSlice';
import {  useDispatch } from 'react-redux';


export default function ProductInfo({route,navigation}) {

  const { item } = route.params;
  const [product, setProduct] = useState({});
  const [name , setName]= useState([]);
 
  
  const dispatch = useDispatch();

  
  
  

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == item.id) {
        await setProduct(Items[index]);
        return;
      }
    }
  };



  const scrollX = new Animated.Value(0);
  const width = Dimensions.get('window').width;


 
  
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor :'#adb5bd',width:'100%',height:'100%'}} >
    <FlatList  style={styles.productImageList}
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
  
          <ScrollView  style={styles.container}   >
            <Text style={styles.productName} > {product.productName}  </Text>
               <Text style={styles.productPrice} > {product.productPrice} </Text> 
            <Text  style={{fontSize:20,marginHorizontal:15}}  >Specs</Text>
            <Text style={styles.description} > {product.description} </Text>
            <View style={styles.addToCartContainer}>
           <TouchableOpacity style={styles.buttonStyle} onPress={() =>{
            
            
              dispatch(addToCart(product));
            

            
            }}  >
           
        
            <Text style={styles.text} > Add to </Text>
              <AntDesign name="shoppingcart" size={25} color="white"  />

          </TouchableOpacity>
          
        </View>
   
         </ScrollView>
         
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor:'white',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    width:'100%',
    height:'60%',

  },
  productImageList:{    
    marginBottom:15,
    marginTop:15,
    height:'40%'
  },
  productName:{
    fontWeight:'500',
    fontSize:25,
    margin:15
  },
  description:{ 
    alignItems:'center',
    marginTop:15,
    marginHorizontal:5,
    lineHeight:20,
    color:'grey'
    

  },
  productPrice:{
    textAlign:'right',
    marginRight:35,
    fontSize:20,
    color:'red',
    marginTop:-35
  },


  addToCartContainer: {
    flex:1,
    alignItems:'center'
    


},
  buttonStyle:{
    flexDirection:'row',
    backgroundColor:'#560bad',
    justifyContent:'center',
    alignItems:'center', 
    justifyContent:'center',
    width:'50%',
    height:45,
    borderRadius:10,
    margin:5,
  },
  text:{  
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  cart:{
    borderRadius:2,
    borderColor:'#560bad',
  }
});