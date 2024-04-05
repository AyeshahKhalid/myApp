import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { primary } from '../theme'
import { fallbackPersonImage, image185 } from '../api/moviedb'

export default function Cast({ cast, navigation }) {
    const characterName = "John Wick"
    const personName = "Keven Flaock"
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={[primary.fontL, { color: "white", marginBottom: 5 }]}>Top Cast</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    cast && cast.map((person, index) =>
                        <TouchableOpacity style={{paddingRight:12,alignItems:"center",justifyContent:"center"}} key={index} onPress={() => navigation.navigate("Person", person)}>
                            <View style={styles.image}>
                                <Image style={{ borderRadius: 35, width: 70, height: 70 }}
                                 source={{ uri:image185(person?.profile_path) || fallbackPersonImage }} />
                            </View>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={[{ width: 85,textAlign:"center" }, styles.white]}>{person?.character}</Text>
                            <Text ellipsizeMode='tail' numberOfLines={1} style={[{ width: 85,textAlign:"center" }, styles.text]}>{person?.original_name}</Text>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        overflow: "hidden",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "rgb(115 115 115)",
        borderRadius: 35,
        height: 70,
        width: 70
    },
    text: {
        marginBottom: 10, fontSize: 14, color: "rgb(163 163 163)", fontWeight: "400"
    },
    white: {
        marginBottom: 10, fontSize: 14, color: "white", fontWeight: "400"
    }
})