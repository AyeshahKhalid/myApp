import React from "react";
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { primary } from "../theme";
const ios = Platform.OS == "ios"
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* search bar and logos */}
            <SafeAreaView style={{ marginBottom: ios ? 2 : 10 }}>
                <StatusBar barStyle={'light-content'} />
            </SafeAreaView>
            <View style={styles.header}>
                <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
                    <Text style={primary.text}>M</Text>ovies
                </Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                </TouchableOpacity>
            </View>
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
        margin:4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});