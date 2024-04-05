import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { image500 } from "../api/moviedb";

export const TrendingMovies = (props) => {
    let data = [...props.data]
    let navigation = useNavigation()
    let { width, height } = Dimensions.get("window")
    return (
        <View style={{ marginBottom: 12, paddingTop: 20 }}>
            <Text style={styles.containerText}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) =>
                // console.warn(item.poster_path)
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Movie", item)}>
                        <Image
                            source={{ uri:image500(item.poster_path) }}
                            style={{
                                width: width * 0.5,
                                height: height * 0.4,
                                borderRadius: 20
                            }}
                        />
                    </TouchableWithoutFeedback>
                }
                firstItem={1}
                inactiveSlideOpacity={0.5}
                sliderWidth={width}
                itemWidth={width * 0.52}
                slideStyle={{ display: 'flex', alignItems: "center" }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerText: {
        marginHorizontal: 13,
        marginBottom: 20,
        color: "white",
        // marginBottom: 5,
        fontSize: 20
    }
})