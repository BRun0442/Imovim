import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Clipboard, Image, Modal } from "react-native";
import { styles } from "./style"

import Header from "../../Header/Header";
import CardEvents from "../../CardEvent/CardEvent";
import Toast from 'react-native-toast-message'
import ProfileImage from "../../ProfileImage/ProfileImage";
import ShowingGoingEvent from "../../Modals/ShowingGoingEvent";
import { Modalize } from "react-native-modalize";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from "../../../contexts/auth";
import { getSavedEvents } from "../../../services/events";

import { getAllEvents } from "../../../services/events";
import { getEvent } from '../../../services/events';
import { goToEvent } from '../../../services/events';
import { saveEvent } from '../../../services/events';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import { showToastBottom } from '../../Toast/Toast';

export default function MeusEventos({ navigation }) {
    const { myEvents, setMyEvents, id, setMarker, setAlterMapPermission } = useContext(AuthContext)
    const [savedEvents, setSavedEvents] = useState(null)
    const [currentEvent, setCurrentEvent] = useState()
    const [participants, setParticipants] = useState()
    const [userGoes, setUserGoes] = useState()
    const [userSaved, setUserSaved] = useState()
    const [author, setAuthor] = useState()
    const [profileImage, setProfileImage] = useState()
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [location, setLocation] = useState()
    const [description, setDescription] = useState()
    const [eventId, setEventId] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)

    const copyToClipboard = async () => {
        await Clipboard.setString(location);
    };

    const handleMap = () => {
        setAlterMapPermission(false)
        setMarker([{ latitude, longitude }])
        navigation.navigate('Mapa')
    }

    const getData = async () => {
        await getSavedEvents(id)
            .then((events) => {
                setSavedEvents(events)
            })
    }

    const [visible, setVisible] = useState(false)

    const getEspecificData = async (event_id) => {
        await getEvent(id, event_id)
            .then((event) => {
                setCurrentEvent(event[0].id);
                setParticipants(event[0].participants)
                setUserGoes(event[0].userGoesToEvent)
                setUserSaved(event[0].userSavedEvent)
                setAuthor(event[0].nickname)
                setProfileImage(event[0].profileImage)
                setName(event[0].event_name)
                setImage(event[0].photo)
                setDate(event[0].event_date)
                setHour(event[0].event_hour)
                setLocation(event[0].localization)
                setDescription(event[0].description)
                setLatitude(event[0].latitude)
                setLongitude(event[0].longitude)
            })
    }

    const modalizeEvents = useRef(null);

    const onOpenEvents = (currentId) => {
        getEspecificData(currentId)
        setEventId(currentId)
        modalizeEvents.current?.open();
    };

    useEffect(() => {
        getData()
    }, [])

    if (!savedEvents) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header navigation={navigation} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Meus Eventos</Text>
                </View>

                <View style={styles.eventTagContainer}>
                    <View style={styles.eventTag}>
                        <Text style={styles.eventText}>Eventos criados</Text>
                        <Entypo name="chevron-small-down" size={24} color="#000" />
                    </View>
                </View>

                <View style={styles.containerEventsPopular}>
                    <ScrollView horizontal={true}>
                        {myEvents.map((event, index) => {
                            return (
                                <TouchableOpacity onPress={() => onOpenEvents(event.id)}>
                                    <CardEvents
                                        key={index}
                                        width={320}
                                        event_id={event.id}
                                        eventName={event.event_name}
                                        eventImage={event.photo}
                                        describeEvent={event.description}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={styles.eventTagContainer}>
                    <View style={styles.eventTag}>
                        <Text style={styles.eventText}>Eventos Salvos</Text>
                        <Entypo name="chevron-small-down" size={24} color="#000" />
                    </View>
                </View>

                <View style={styles.containerEventsNearYou}>
                    <ScrollView horizontal={true}>
                        {savedEvents.map((event, index) => {
                            return (
                                <TouchableOpacity onPress={() => onOpenEvents(event.id)}>
                                    <CardEvents
                                        key={index}
                                        width={320}
                                        event_id={event.id}
                                        eventName={event.event_name}
                                        eventImage={event.photo}
                                        describeEvent={event.description}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

            </ScrollView>

            <Modalize ref={modalizeEvents}>
                {eventId != currentEvent ? (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <ScrollView style={styles.content}>

                        <View style={styles.header}>
                            <TouchableOpacity style={styles.button}>
                                <FontAwesome5 name="calendar-plus" size={25} color="#F8670E" />
                                <Text style={styles.headerText}>{name}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.editButton}>
                                <Foundation name="pencil" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentContainer}>

                            <View style={styles.authorEvent}>
                                <ProfileImage profileImage={profileImage} />
                                <Text style={styles.authorTitle}>Criado por: </Text>
                                <Text style={styles.author}>{author}</Text>
                            </View>

                            <View style={styles.eventImage}>
                                <Image style={styles.image} source={{ uri: image }} />
                            </View>

                            <View style={styles.contentInfo}>

                                <View style={styles.dateEvent}>
                                    <Text style={styles.dateTitle}>Data: </Text>
                                    <Text style={styles.date}>{date}</Text>
                                </View>

                                <View style={styles.hourEvent}>
                                    <Text style={styles.hourTitle}>Horário: </Text>
                                    <Text style={styles.hour}>{hour}</Text>
                                </View>

                                <View style={styles.locationEvent}>
                                    <Text style={styles.locationTitle}>Local: </Text>

                                    <View style={styles.locationDataContainer}>

                                        <View style={styles.locationData}>
                                            <Text style={styles.location}>{location}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.containerButtons}>

                                        <TouchableOpacity
                                            style={styles.buttonMap}
                                            onPress={() => handleMap()}
                                        >
                                            <FontAwesome5 name="map-marked-alt" size={30} color="#F8670E" />
                                            <Text>Ver a localização</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.buttonCopy}
                                            onPress={() => {
                                                copyToClipboard()
                                                showToastBottom('Copiado com sucesso!', 'bottom')
                                            }}
                                        >
                                            <FontAwesome5 name="copy" size={30} color="#F8670E" />
                                            <Text>Copiar a localização</Text>
                                        </TouchableOpacity>

                                    </View>

                                </View>

                                <View style={styles.descritpionEvent}>

                                    <Text style={styles.description}>
                                        <Text style={styles.descriptionTitle}>Descrição do Evento: </Text>
                                        {description}
                                    </Text>
                                </View>

                            </View>

                            <View style={styles.interactiveButtonContainer}>

                                <TouchableOpacity onPress={() => {
                                    goToEvent(id, eventId)
                                        .then(() => {
                                            console.log('testeeee');
                                            getEspecificData(eventId)
                                        })
                                }} style={styles.interactiveButton}

                                    onLongPress={() => setVisible(true)}

                                >

                                    <AntDesign name="like1" size={50} color={userGoes ? "purple" : "#FFF"} />
                                    <Text style={styles.interactiveText}>Eu vou!</Text>

                                    <View style={styles.iGoContainer}>
                                        <Text style={styles.iGo}>{participants}</Text>
                                    </View>

                                    <Modal
                                        visible={visible}
                                        transparent={true}
                                        onRequestClose={() => setVisible(false)}
                                    >

                                        <ShowingGoingEvent
                                            handleClose={() => setVisible(false)}
                                        />
                                    </Modal>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    saveEvent(id, eventId)
                                        .then(() => {
                                            console.log('testeeee');
                                            getEspecificData(eventId)
                                        })
                                }} style={styles.interactiveButton}>
                                    {
                                        userSaved ? (
                                            <View style={styles.iconContainer}>
                                                <Feather name="check-circle" size={55} color="#8B04A2" />
                                                <Text style={styles.interactiveText}>Salvo</Text>
                                            </View>
                                        )
                                            :
                                            <View style={styles.iconContainer}>
                                                <Ionicons name="add-circle-outline" size={75} color="#FFF" />
                                                <Text style={styles.interactiveText}>Salvar</Text>
                                            </View>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Modalize>

        </View>
    )
}