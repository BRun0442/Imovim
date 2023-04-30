import React from "react";
import { View, Text } from "react-native"
import ProfileImage from "../ProfileImage/ProfileImage";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function UsersLikePost(props) {
    return (
        <View style={styles.container}>

            <View style={styles.userInfo}>
                <ProfileImage />
                <Text style={styles.name}>{props.name}</Text>
            </View>

            <View>
                <AntDesign name="like1" color={"#F8670E"} size={24} />
            </View>

        </View>
    )
}