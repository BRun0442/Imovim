import { View, Text, Image } from "react-native";
import { styles } from './style'
import { Entypo } from '@expo/vector-icons';

export default function NotificationNewFriend(props) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.iconCam}>
                    <Entypo name="camera" size={20} color="white" />
                </View>
            </View>
            <View style={styles.data}>
                <Text style={{fontWeight: "600", fontSize: 18}}>{props.name}</Text>
                <Text>{props.city}</Text>
                <Text>{props.sports}</Text>
            </View>
        </View>
    )
}