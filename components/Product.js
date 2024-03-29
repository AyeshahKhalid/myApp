import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native"
import { addToCart, removeFromCart } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
    const item = props.product
    const cartItems = useSelector((state) => state.reducer)
    const [isAdd, setIsAdd] = useState(false)
    const dispatch = useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name))
    }
    useEffect(() => {
        let result = cartItems.filter((element) => {
        return  element.name === item.name
    })
        if (result.length) {
            setIsAdd(true)
        }
        else {
            setIsAdd(false)
        }
    }, [cartItems])
    return (
        <View style={styles.main} key={item.name}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ fontSize: 15 }}>{item.detail}</Text>
            <Image style={{ width: 150, height: 150, marginBottom: 20 }} source={{ uri: item.image }} />
            {
                isAdd
                    ? <Button title="remove from cart" onPress={() => handleRemoveFromCart(item)}></Button>
                    : <Button title="add to cart" onPress={() => handleAddToCart(item)}></Button>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        margin: 30,
        borderWidth: 1,
        borderColor: "orange",
        alignItems: "center",
        // justifyContent:"center",
        flex: 1
    }
})

export default Product