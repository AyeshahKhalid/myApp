import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from './LoadingScreen';
import { fallbackMoviePoster, image185, searchMovies } from '../api/moviedb';
import {debounce} from 'lodash'

export default function SearchScreen() {
    const navigation = useNavigation()
    const [result, setResult] = useState([]);
    const { width, height } = Dimensions.get("window");
    const moviename = "Harry Potter and the Philosopher's Stone";
    const [loading, setLoading] = useState(false)
    const handleSearch=(text)=>{
        if(text&&text.length>2){
            setLoading(true)
            searchMovies({
                query:text,include_adult:"false",language:'en-US',page:'1'
            }).then(data=>{
                setLoading(false)
                if(data&&data.results){
                    setResult(data.results)
                }
            })
        }
        else{
            setLoading(false)
            setResult([])
        }
    }
    const handleTextDebounce=useCallback(debounce(handleSearch,400),[])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainS}>
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder='Search Movie'
                    placeholderTextColor={"lightgray"}
                    style={styles.input}
                ></TextInput>
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                    <XMarkIcon size={25} color="white" />
                </TouchableOpacity>
            </View>
            {
                loading ?
                    <LoadingScreen />
                    :
                    result.length ?
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                            <Text style={styles.result}>Result ({result.length})</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                {
                                    result.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push("Movie", item)}
                                            >
                                                <View>
                                                    <Image
                                                        style={{ width: width * 0.44, height: height * 0.3, borderRadius: 20 }}
                                                        source={{ uri: image185(item?.poster_path)||fallbackMoviePoster }} />
                                                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>{item?.title}</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })

                                }
                            </View>
                        </ScrollView>
                        :
                        <View style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",


                        }}>
                            <Image style={{ width: width * 0.7, height: height * 0.3 }} source={require("../../MovieApp/assets/images/undraw_raining.png")} />
                        </View>
            }


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
        margin: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "rgb(115 115 115)",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: "white",

    },
    result: {
        color: "white",
        marginBottom: 20,
        fontSize: 16
    },
    title: {
        width: 150, marginBottom: 16, marginLeft: 10, marginTop: 8, fontSize: 15, color: "rgb(163 163 163)", fontWeight: "400"
    },
});