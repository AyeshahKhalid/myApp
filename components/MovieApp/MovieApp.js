import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import PersonScreen from "./screens/PersonScreen";

const Stack = createNativeStackNavigator();
const MovieApp = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Person" options={{headerShown:false}} component={PersonScreen}></Stack.Screen>
                <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Movie" options={{headerShown:false}} component={MovieScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MovieApp;