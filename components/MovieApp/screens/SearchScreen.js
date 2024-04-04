import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from "@react-navigation/native";
export default function SearchScreen() {
    const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.mainS}>
            <TextInput
            placeholder='Search Movie'
            placeholderTextColor={"lightgray"}
            style={styles.input}
            ></TextInput>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                <XMarkIcon size={25} color="white"/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(38 38 38)",
    },
    mainS: {
        // paddingVertical:0,
        margin:10,
        paddingHorizontal:15,
        borderWidth:1,
        borderRadius:30,
        borderColor:"rgb(115 115 115)",
        
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        flex:1,
        fontSize:16,
        color:"white",
       
    }
});