import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import ProfileImage from "../ProfileImage/ProfileImage";
import { styles } from "./styles";

import { Ionicons } from '@expo/vector-icons';

export default function IGoInEvent(props) {
    return (
        <View style={styles.container}>

            <View style={styles.userInfo}>
                <TouchableOpacity>
                    <ProfileImage profileImage={props.profileImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.name}>{props.name}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Ionicons name="hand-left-sharp" size={24} color={"#F8670E"} />
            </View>

        </View>
    )
}