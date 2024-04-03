import React from "react";
import { View,Text,StyleSheet, TouchableWithoutFeedback, Dimensions,Image } from "react-native";
import Carousel from "react-native-snap-carousel";

export const TrendingMovies=(props)=>{
    let data=[...props.data]
    let {width,height}=Dimensions.get("window")
    return(
        <View>
            <Text style={styles.containerText}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({item})=>
            <TouchableWithoutFeedback>
                <Image
                source={{uri:"https://static.tvtropes.org/pmwiki/pub/images/f321f0be_1937_4f71_87c3_d436edfe37af.png"}}
                style={{
                    width:width*0.6,
                    height:height*0.4,
                    borderRadius:20
                    
                }}

                />
            </TouchableWithoutFeedback>
            }
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width*0.62}
                slideStyle={{display:'flex',alignItems:"center"}}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    containerText:{
        color:"white",
        marginLeft:4,
        marginRight:4,
        marginBottom:5,
        fontSize:20
    }
})