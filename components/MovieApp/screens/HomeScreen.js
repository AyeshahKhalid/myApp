import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { primary } from "../theme";
import { TrendingMovies } from "../components/trendingMovies";
import { MoviesList } from "../components/moviesList";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "./LoadingScreen";
import { fetchTrendingMovies } from "../api/moviedb";
const ios = Platform.OS == "ios"
const HomeScreen = () => {
    const [trending, setTrending] = useState([1, 2, 3]);
    const [upcoming, setUpcoming] = useState([1, 2, 3]);
    const [topRated, settopRated] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()
    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies()
        if (data && data.result){
            setTrending(data)
            setLoading(false)
        }
    }
    useEffect(() => {
        getTrendingMovies();
    }, []);
    return (
        <View style={styles.container}>
            {/* search bar and logos */}
            <SafeAreaView style={{ marginBottom: ios ? 2 : 10 }}>
                <StatusBar barStyle={'light-content'} />

                <View style={styles.header}>
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
                        <Text style={primary.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {
                loading ?
                    <LoadingScreen />
                    :
                    <ScrollView>
                        {/* trending movies carousel */}
                        <TrendingMovies data={trending} />
                        {/* upcoming movies row */}
                        <MoviesList title="Upcoming" data={upcoming} />
                        {/* top rated movies row */}
                        <MoviesList title="Top Rated" data={topRated} />
                    </ScrollView>
            }

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(38 38 38)",
    },
    header: {
        margin: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});