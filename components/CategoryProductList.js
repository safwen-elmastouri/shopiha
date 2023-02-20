import React ,  {useState , useEffect} from 'react'
import { StyleSheet, Text , View ,Image,FlatList, Pressable, ScrollView} from 'react-native'

import { categories, Items } from '../DB/data';
import SeeMoreButton from './customComponent/SeeMoreButton';

export default function CategoryProductList({route,navigation}) {
  const [product, setProduct] = useState({});
  const { item } = route.params;
const data = []
  const getDataFromDB =  () => {
      for (let index = 0; index < Items.length; index++) {
        if (Items[index].category==item.category){
          setProduct(Items[index]);
          data.push(Items[index])

        }
      }
  };

  return(
    <> 
    <Text> 
 </Text>   
   </>
 );
}

const styles = StyleSheet.create({

   

})