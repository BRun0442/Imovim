import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Clipboard, Image } from "react-native";
import { styles } from "./style"

import Header from "../../Header/Header";
import Toast from 'react-native-toast-message'
import CardEvents from "../../CardEvent/CardEvent";
import ProfileImage from "../../ProfileImage/ProfileImage";

import { getAllEvents } from "../../../services/events";
import { AuthContext } from "../../../contexts/auth";
import { getEvent } from '../../../services/events';
import { goToEvent } from '../../../services/events';
import { saveEvent } from '../../../services/events';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Modalize } from "react-native-modalize";
import { toastConfig } from '../../Toast/toastConfig';
import { showToastBottom } from '../../Toast/Toast';

// import * as Clipboard from 'expo-clipboard';

export default function Eventos({ navigation }) {
    const { id, setMarker, setAlterMapPermission } = useContext(AuthContext)
    const [events, setEvents] = useState(null)
    const getData = async () => {
        const data = await getAllEvents(id)
        return data
    }
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

    const onOpenEvents = () => {
        modalizeEvents.current?.open();
    };

    const handleMap = () => {
        setAlterMapPermission(false)
        setMarker([{ latitude, longitude }])
        navigation.navigate('Mapa')
    }

    useEffect(() => {
        getData()
            .then((res) => {
                setEvents(res)
                console.log(res)
            })
    }, [])

    if (!events) {
        return (
            <View>
                <Text>loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Eventos</Text>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Criar Evento') }}
                        style={styles.createEventButton}
                    >
                        <MaterialCommunityIcons name="calendar-plus" size={30} color="#F8670E" />
                        <Text style={styles.createEventButtonText}>Criar Evento</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos populares</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>


                <View style={styles.containerEventsPopular}>
                    <ScrollView horizontal={true}>
                        {events.map((item, id) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setEventId(item.id)
                                    getEspecificData(item.id)
                                    onOpenEvents()
                                }}>
                                    <CardEvents
                                        key={id}
                                        width={320}
                                        event_id={item.id}
                                        eventName={item.event_name}
                                        eventImage={item.photo}
                                        describeEvent={item.description}
                                        event_hour={item.event_hour}
                                        event_date={item.event_date}
                                        location={item.localization}
                                        participants={item.participants}
                                        userGoes={item.userGoesToEvent}
                                        userSaved={item.userSavedEvent}
                                    />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>

                <View style={styles.eventTag}>
                    <Text style={styles.eventText}>Eventos perto de você</Text>
                    <AntDesign name="right" size={20} color="black" />
                </View>

                <View style={styles.containerEventsNearYou}>
                    <ScrollView horizontal={true}>
                        <CardEvents
                            width={320}
                            eventName="Evento de PowerLifting"
                            eventImage="https://portalcorreio.com.br/portalcorreio/arquivos/2022/09/dc89df116679d18dc8739c7ce18d8f44.jpg"
                            describeEvent="O evento acontecerá no box da rua 22"
                        />

                        <CardEvents
                            width={320}
                            eventName="Corrida no parque"
                            eventImage="https://blog.bodytech.com.br/wp-content/uploads/2022/03/shutterstock_776440840-scaled.jpg"
                            describeEvent="Corrida e Caminhada no parque"
                        />
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
                                }} style={styles.interactiveButton}>

                                    <AntDesign name="like1" size={50} color={userGoes ? "purple" : "#FFF"} />
                                    <Text style={styles.interactiveText}>Eu vou!</Text>

                                    <View style={styles.iGoContainer}>
                                        <Text style={styles.iGo}>{participants}</Text>
                                    </View>

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
                <Toast config={toastConfig} />
            </Modalize>
        </View>
    )
}