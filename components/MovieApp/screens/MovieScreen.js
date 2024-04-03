import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Touchable, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primary, theme } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "react-native-svg";

const MovieScreen = () => {
    // const {params}=props.route.params //not corret
    const {width,height}=Dimensions.get('window')
    const { params: item } = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const navigation = useNavigation()
    return (

        <ScrollView style={styles.container}>
            {/* back button and movie poster */}
            <View>
                <SafeAreaView style={[styles.header, { padding: 10 }]}>
                    <TouchableOpacity onPress={() =>navigation.goBack()} style={[primary.background, { padding: 5, borderRadius: 12 }]}>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"></ChevronLeftIcon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ borderRadius: 10 }]} onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} strokeWidth={2.5} color={isFavourite ? theme.background : "white"}></HeartIcon>
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image source={{uri:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"}} style={{width:width,height:height*0.55}}/>
                </View>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(38 38 38)",
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