import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primary, theme } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const MovieScreen = () => {
    // const {params}=props.route.params //not corret
    const {width,height}=Dimensions.get('window')
    const { params: item } = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const navigation = useNavigation()
    const ios =Platform.OS=='ios';
    const moviename="Marvel Avengers 3"
    return (

        <ScrollView contentContainerStyle={{paddingBottom:20}} style={styles.container}>
            {/* back button and movie poster */}
            <View style={{width:"100%"}}>
                <SafeAreaView style={[styles.header, { paddingHorizontal: 16,marginTop:ios?"":12 }]}>
                <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent/>
                    <TouchableOpacity onPress={() =>navigation.goBack()} style={[primary.background, { padding: 5, borderRadius: 12 }]}>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"></ChevronLeftIcon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ borderRadius: 10 }]} onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} strokeWidth={2.5} color={isFavourite ? theme.background : "white"}></HeartIcon>
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image source={{uri:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"}} style={{width:width,height:height*0.55}}/>
                <LinearGradient colors={['transparent','rgba(23,23,23,.9)','rgba(23,23,23,1)']}
                style={{width:width,height:height*0.44,position:"absolute",bottom:0}}
                start={{x:0.5,y:0}}
                end={{x:0.5,y:1}}
                />
                </View>
            </View>
            {/* movie details */}
            <View style={{marginTop:-(height*0.09)}}>
                <Text style={{fontSize:28,fontWeight:"bold",color:"white",textAlign:"center"}}>{moviename}</Text>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(23 23 23)"
    },
    header: {
        width:'100%',
        zIndex:20,
        position:"absolute",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
export default MovieScreen