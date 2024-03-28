import React, { useEffect, useState } from "react";
import {View,Text} from "react-native"
import { useSelector } from "react-redux";

const Header =()=>{
    const cartData=useSelector((state)=>state.reducer);
    const [cartItem,setCartItem]=useState(0)
    useEffect(()=>{
        setCartItem(cartData.length)
    },[cartData])
    return(
        <View style={{backgroundColor:"orange",padding:10}}>
            <Text style={{fontSize:20,textAlign:"right"}}>{cartItem}</Text>
        </View>
    );
}

export default Header;