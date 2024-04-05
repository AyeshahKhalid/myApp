import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primary, theme } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
import { reducer } from "../../redux/reducer";
import { MoviesList } from "../components/moviesList";
import LoadingScreen from "./LoadingScreen";

export default function PersonScreen() {
    const { width, height } = Dimensions.get('window')
    const ios = Platform.OS == 'ios';
    const navigation = useNavigation()
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies,setPersonMovies]=useState([1,2,3,4,5])
    const [loading, setLoading] = useState(false)
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>

            <SafeAreaView style={[styles.header, { width: "100%", paddingHorizontal: 16, marginTop: ios ? "" : 12 }]}>
                <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
                <TouchableOpacity onPress={() => navigation.goBack()} style={[primary.background, { padding: 5, borderRadius: 12 }]}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"></ChevronLeftIcon>
                </TouchableOpacity>
                <TouchableOpacity style={[{ borderRadius: 10 }]} onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size={35} strokeWidth={2.5} color={isFavourite ? "red" : "white"}></HeartIcon>
                </TouchableOpacity>
            </SafeAreaView>
            {
                loading?<LoadingScreen/>:
                <View>
                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", }}>
                    <View style={styles.imageShadow}>
                        <View style={[styles.image]}>
                            <Image style={{ width: width * 0.74, height: height * 0.43, }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu03H2fzML9ZNRkVYrtbhQBhem22qtqVO21A&s" }} />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Keanu Reeves</Text>
                    <Text style={styles.description}>London, United Kingdom</Text>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.stats}>
                        <Text style={{ color: "white" }}>Gender</Text>
                        <Text style={{ color: "rgb(163 163 163)" }}>Male</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={{ color: "white" }}>Birthday</Text>
                        <Text style={{ color: "rgb(163 163 163)" }}>1987-01-11</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={{ color: "white" }}>Known for</Text>
                        <Text ellipsizeMode="tail" numberOfLines={1}  style={{ width:50,color: "rgb(163 163 163)" }}>Acting</Text>
                    </View>
                    <View style={[styles.stats, { borderRightWidth: 0 }]}>
                        <Text style={{ color: "white" }}>Popularity</Text>
                        <Text style={{ color: "rgb(163 163 163)" }}>64.23</Text>
                    </View>
                </View>
                {/* Biography */}
                <View style={{ marginHorizontal: 15, marginVertical: 30 }}>
                    <Text style={styles.biography}>Biography</Text>
                    <Text style={[primary.fontXSmall, { color: "rgb(163 163 163)",textAlign:"justify" }]}>Keanu Charles Reeves is a Canadian actor, musician, and comic book writer. Regarded as one of the most influential and acclaimed actors in modern history, he is known for his versatile performances in numerous genres throughout his career, and is considered a sex symbol in the media.</Text>
                </View>
                <MoviesList title="Movies" hideSeeAll={true} data={personMovies}/>
            </View>
            }
           
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(23 23 23)",
    },
    header: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        marginVertical: 10, fontSize: 29, color: "white", textAlign: "center", fontWeight: "700"
    },
    description: {
        marginBottom: 10, fontSize: 15, color: "rgb(163 163 163)", textAlign: "center", fontWeight: "400"
    },
    imageShadow: {
        borderRadius: 160,
        elevation: 15,
        paddingHorizontal: 15,
        shadowColor: 'white',
    },
    image: {
        overflow: "hidden",
        marginVertical: 20,
        width: 288,
        height: 288,
        borderWidth: 1,
        borderColor: "rgb(115 115 115)",
        borderRadius: 9999,
    },
    statsContainer: {
        flexDirection: "row",
        backgroundColor: "rgb(64 64 64)",
        marginHorizontal: 30,
        borderRadius: 30,
        paddingVertical: 10,
        paddingLeft: 10
    }
    ,
    stats: {
        paddingHorizontal: 10,
        borderRightWidth: 1,
        borderRightColor: "gray",
        alignItems: "center"
    },
    biography: {
        color: "white",
        marginBottom: 10,
        fontSize: 20
    },
})