import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { primary } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { fallbackMoviePoster, image185 } from "../api/moviedb";
export const MoviesList = (props) => {

    let { title, data, hideSeeAll } = props

    let { width, height } = Dimensions.get("window")
    let navigation = useNavigation()
    let moviename = "harry potter and the philosopher's stone"
    return (
        <View style={{ marginBottom: 25, paddingTop: 20 }}>
            <View style={styles.container}>
                <Text style={styles.containerText}>{title}</Text>
                {
                    !hideSeeAll && (<TouchableOpacity>
                        <Text style={[primary.fontL, primary.text]}>See All</Text>
                    </TouchableOpacity>)
                }

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) =>
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Movie", item)}>
                            <View style={{ marginRight: 20 }}>
                                <Image
                                    source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                                    style={{ width: width * 0.33, height: height * 0.25, borderRadius: 20 }}
                                >
                                </Image>
                                {/* <Text style={[primary.fontSmall, { marginTop: 6, color: "white", marginLeft: 5 }]}>
                                    {
                                        moviename.length >= 16 ? moviename.slice(0, 16) + "..." : moviename
                                    }
                                </Text> */}
                                <Text ellipsizeMode="tail" numberOfLines={3} style={[primary.fontSmall, { marginTop: 6, color: "white", marginLeft: 5, width: 120 }]}>
                                    {item.title}
                                </Text>

                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
        marginBottom: 15
    },
    containerText: {
        color: "white",
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 5,
        fontSize: 20
    },
    seeAll: {
        fontSize: 20
    }
})