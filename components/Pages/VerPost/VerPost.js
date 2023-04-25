import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import Header from "../../Header/Header";
import {styles} from './styles'
import Post from "../../Post/Post";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function VerPost() {
    return (
        <View style={styles.container}>
            <Header />
            {/* <Post /> */}

            <View style={styles.imgContainer}>
                {/* <Image /> */}
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AntDesign name="like1" size={35} color= "#FFF"/>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="chatbubble" size={35} color="#FFF" />
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer}>
                    <FontAwesome name="share" size={35} color="#FFF" />
                    
                </TouchableOpacity>
            </View>

        </View>
    )
}