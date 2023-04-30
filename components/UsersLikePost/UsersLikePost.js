import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import ProfileImage from "../ProfileImage/ProfileImage";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function UsersLikePost(props) {
    return (
        <View style={styles.container}>

            <View style={styles.userInfo}>
                <TouchableOpacity onPress={() => props.goToProfile(props.user_id)}>
                    <ProfileImage profileImage={props.profileImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.goToProfile(props.user_id)}>
                    <Text style={styles.name}>{props.name}</Text>
                </TouchableOpacity>
            </View>

            <View>
                <AntDesign name="like1" color={"#F8670E"} size={24} />
            </View>

        </View>
    )
}