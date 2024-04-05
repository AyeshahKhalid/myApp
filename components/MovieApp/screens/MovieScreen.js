import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { primary, theme } from "../theme";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Cast from "../components/cast";
import { MoviesList } from "../components/moviesList";
import LoadingScreen from "./LoadingScreen";
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, image500 } from "../api/moviedb";

const MovieScreen = () => {
    // const {params}=props.route.params //not corret
    const { width, height } = Dimensions.get('window')
    const { params: item } = useRoute()
    const [isFavourite, toggleFavourite] = useState(false)
    const navigation = useNavigation()
    const ios = Platform.OS == 'ios';
    const moviename = "Harry Potter and the Philosopher's Stone";
    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [similarMovies, setsimilarMovies] = useState([1, 2, 3, 4, 5])
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState({})

    const getMovieDetails = async (id) => {
        const data = await fetchMovieDetails(id)
        if (data) {
            setMovie(data)
        }
        setLoading(false)
    }
    const getMovieCredits = async (id) => {
        const data = await fetchMovieCredits(id)
        if (data&&data.cast) {
            setCast(data.cast)
        }
        setLoading(false)
    }
    useEffect(() => {
        setLoading(true)
        getMovieDetails(item.id)
        getMovieCredits(item.id)
    }, [item])
    return (

        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.container}>
            {/* back button and movie poster */}
            <View style={{ width: "100%" }}>
                <SafeAreaView style={[styles.header, { paddingHorizontal: 16, marginTop: ios ? "" : 12 }]}>
                    <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[primary.background, { padding: 5, borderRadius: 12 }]}>
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"></ChevronLeftIcon>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ borderRadius: 10 }]} onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} strokeWidth={2.5} color={isFavourite ? theme.background : "white"}></HeartIcon>
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? <LoadingScreen /> :
                        <View>
                            <Image source={{ uri: image500(movie?.poster_path) || fallbackMoviePoster }} style={{ width: width, height: height * 0.55 }} />
                            <LinearGradient colors={['transparent', 'rgba(23,23,23,.9)', 'rgba(23,23,23,1)']}
                                style={{ width: width, height: height * 0.44, position: "absolute", bottom: 0 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                            />
                        </View>
                }


                {/* movie details */}
                <View style={{ marginTop: -(height * 0.09) }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 15 }}>{movie?.title}</Text>
                    {/* status,release date, runtime */}
                    {
                        movie?.id ?
                            <Text style={styles.text}>{movie?.status} • {movie.release_date?.split('-')[0]} • {movie?.runtime}</Text>
                            : null
                    }

                </View>
                {/* genres */}
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                    {
                        movie?.genres?.map((genre, index) => {
                            let showDot = index + 1 != movie.genres.length
                            return (
                                <Text key={index} style={styles.text}>{genre?.name}{showDot ? " • " : null}</Text>
                            )
                        })
                    }

                    <Text style={styles.text}>Thrill • </Text>
                    <Text style={styles.text}>Comedy</Text>
                </View>
                {/* description */}
                <Text style={[styles.text, { paddingHorizontal: 20, textAlign: "justify" }]}>
                    {movie?.overiew}
                </Text>
            </View>
            <Cast cast={cast} navigation={navigation} />
            {/* Similar Movies */}
            <MoviesList title="Similar Movies" data={similarMovies} hideSeeAll={true} />
        </ScrollView >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(23 23 23)"
    },
    header: {
        width: '100%',
        zIndex: 20,
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        marginBottom: 10, fontSize: 14, color: "rgb(163 163 163)", textAlign: "center", fontWeight: "400"
    }
})
export default MovieScreen