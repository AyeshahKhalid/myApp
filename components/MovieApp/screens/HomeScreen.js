import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { primary } from "../theme";
import { TrendingMovies } from "../components/trendingMovies";
import { MoviesList } from "../components/moviesList";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "./LoadingScreen";
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/moviedb";
const ios = Platform.OS == "ios"
const HomeScreen = () => {
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()
    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies()
        if (data && data.results) {
            setTrending(data.results)
            setLoading(false)
        }
    }
    const getUpcomingingMovies = async () => {
        const data = await fetchUpcomingMovies()
        if (data && data.results) {
            setUpcoming(data.results)
        }
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies()
        if (data && data.results) {
            setTopRated(data.results)
        }
    }
    useEffect(() => {
        getTrendingMovies();
        getUpcomingingMovies();
        getTopRatedMovies();
    }, []);
    return (
        <View style={styles.container}>
            {/* search bar and logos */}
            <SafeAreaView style={{ marginBottom: ios ? 2 : 10 }}>
                <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent/>

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
                        {trending.length>0 && <TrendingMovies data={trending} />}
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