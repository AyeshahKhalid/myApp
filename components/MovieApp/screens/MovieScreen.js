import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";

const MovieScreen = (props) => {
    // const {params}=props.route.params //not corret
    const { params: item } = useRoute()
    console.warn(item)
    return (
        <View style={styles.container}>
            <Text>This is movie screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(38 38 38)",
    },
})
export default MovieScreen