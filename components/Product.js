import React from "react";
import {View,Text, Image} from "react-native"

const Product =(props)=>{
    const item=props
    return(
        <View>
            <Text>dsfs{item.name}</Text>
            <Text>{item.detail}</Text>
            <Image source={{uri:item.image}}/>
        </View>
    );
}

export default Product