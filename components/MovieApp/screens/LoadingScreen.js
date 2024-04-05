import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { theme } from '../theme';
const {width,height}=Dimensions.get("window")
export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator thickness={12} size={160} color={theme.text} ></ActivityIndicator>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:height*0.8,
        width:width,
        // borderWidth:1,
        // borderColor:"red"
    }
})