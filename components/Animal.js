import React from "react";
import { Button, Text, View, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native'

export default Animal=(props)=>{
    return(
      <View><Text style={styles.gridbox}>{props.name}</Text></View>
    );
  }


const styles = StyleSheet.create({
    gridbox: {
        width: 80,
        height: 80,
        borderWidth: 1,
        // backgroundColor: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 5
      }
})