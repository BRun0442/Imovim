import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "./style"
import { FontAwesome5 } from '@expo/vector-icons';
import EventModal from "../Modals/EventModal";

function CardEvents(props) {
    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <TouchableOpacity
            style={styles.eventCard}
            onPress={() => setVisibleModal(true)}
        >
            <View style={styles.titleContainer}>
                <FontAwesome5 name="calendar-plus" size={20} color="#F8670E" />
                <Text style={styles.title}>{props.eventName}</Text>
            </View>

            <View>
                <Image
                    style={styles.image}
                    source={{ uri: props.eventImage }}
                />
            </View>

            <View style={styles.describeContainer}>
                <Text style={styles.describe}>{props.describeEvent}</Text>
            </View>

            <View>
                <Modal
                    visible={visibleModal}
                    transparent={true}
                    onRequestClose={() => setVisibleModal(false)}
                >
                    <EventModal
                        event_id={props.event_id}
                        handleClose={() => setVisibleModal(false)}
                    />
                </Modal>
            </View>
            
        </TouchableOpacity>
    )
}

export default CardEvents;