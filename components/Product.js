import React from "react";
import {View,Text, Image, Button, StyleSheet} from "react-native"
import { addToCart,removeToCart } from "./redux/action";
import { UseDispatch, useDispatch } from "react-redux";

const Product =(props)=>{
    const item=props.product
    const dispatch=useDispatch();
    const handleAddToCart=(item)=>{
        dispatch(addToCart(item))
    }
    const handleRemoveToCart=(item)=>{
        dispatch(removeToCart(item))
    }
    return(
        <View style={styles.main} key={item.name}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
            <Text style={{fontSize:15}}>{item.detail}</Text>
            <Image style={{width:150, height:150,marginBottom:20}} source={{uri:item.image}}/>
            <Button title="add to cart" onPress={()=>handleAddToCart(item)}></Button>
            <Button title="remove to cart" onPress={()=>handleRemoveToCart(item)}></Button>
        </View>
    );
}

const styles=StyleSheet.create({
    main:{
        padding:10,
        margin:30,
        borderWidth:1,
        borderColor:"orange",
        alignItems:"center",
        // justifyContent:"center",
        flex:1
    }
})

export default Product