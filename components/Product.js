import React from "react";
import {View,Text, Image, Button, StyleSheet} from "react-native"

const Product =(props)=>{
    const item=props.product
    return(
        <View style={styles.main}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
            <Text style={{fontSize:15}}>{item.detail}</Text>
            <Image style={{width:150, height:150,marginBottom:20}} source={{uri:item.image}}/>
            <Button title="add to cart"></Button>
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