import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StatusBar, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style'
import Header from '../../Header/Header';
import ProfileImage from '../../ProfileImage/ProfileImage';
import { AuthContext } from '../../../contexts/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo } from '@expo/vector-icons';
import { createEvent } from '../../../services/events';
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Image } from 'react-native';

export default function MarcarEventos({ navigation }, props) {
    const { id } = useContext(AuthContext);
    const [name, setName] = useState()
    const [localization, setLocalization] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [galleryPermission, setGalleryPermission] = useState(null);

    const [descriptionLength, setDescriptionLength] = useState(0)

    const { profilePicture, username } = useContext(AuthContext);

    useEffect(() => {
        // CameraPermisionFunction();
        // setImage(null);
        galeryPermisionFunction();
    }, []);

    const galeryPermisionFunction = async () => {
        const galleryPermissions = await MediaLibrary.requestPermissionsAsync();
        setGalleryPermission(galleryPermissions.granted);
    };


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //   aspect: [1, 1],
            //   quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            // UploadImage(result.uri, setImageUrl)  // PRECISAMOS ARRUMAR ESSA GAMBIARRA!!!
        }
    };

    const main = async () => {
        if (galleryPermission == true) {
            pickImage();
        } else {
            galeryPermisionFunction();
        }
    }
    const handleSubmit = async () => {
        console.log(id, name, localization, description, day, month, year, hour, minute)
        const eventDate = `${year}/${month}/${day}`
        const eventHour = `${hour}:${minute}`
        await createEvent(id, name, eventDate, eventHour, localization, description, image, setImage)
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header navigation={navigation} />

            <ScrollView>

                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="calendar" color={"#fff"} size={26} />
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postProfile}>
                        <ProfileImage profileImage={profilePicture} />

                        <View style={styles.profileContainer}>
                            <Text style={styles.profileName}>{username}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.form}>

                    <Text style={styles.formText}>Nome</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            onChangeText={(text) => setName(text)}
                            keyboardType='default'
                        />
                    </View>

                    <Text style={styles.formText}>Data</Text>
                    <View style={styles.dataInputs}>

                        <TextInput style={styles.inputType2}
                            onChangeText={(text) => setDay(text)}
                            placeholder="Dia"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            onChangeText={(text) => setMonth(text)}
                            placeholder="Mês"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            onChangeText={(text) => setYear(text)}
                            placeholder="Ano"
                            keyboardType='numeric'
                        />
                    </View>

                    <Text style={styles.formText}>Hora</Text>

                    <View style={styles.horaInputs}>
                        <TextInput style={styles.inputType2}
                            onChangeText={(text) => setHour(text)}
                            placeholder="hh"
                            keyboardType='numeric'
                        />

                        <TextInput style={styles.inputType2}
                            onChangeText={(text) => setMinute(text)}
                            placeholder="min"
                            keyboardType='numeric'
                        />

                    </View>

                    <Text style={styles.formText}>Local</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            onChangeText={(text) => setLocalization(text)}
                            keyboardType='default'
                        />
                    </View>

                    <Text style={styles.formText}>Descrição</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType3}
                            maxLength={100}
                            onChangeText={(text) => {
                                setDescription(text)
                                setDescriptionLength(text.length)
                            }}
                            keyboardType='default'
                            multiline={true}
                        />

                        <Text style={styles.descriptionLengthText}>{descriptionLength} / 100</Text>

                    </View>

                    <Text style={styles.formText}>Foto</Text>

                    <View style={styles.banner}>
                        <TouchableOpacity

                            onPress={() => pickImage()}

                            style={styles.editProfileIconContainerBanner}>

                            {!image && (

                                <View style={styles.editBanner}>
                                    <Entypo name="camera" size={22} color="#FFF" />
                                </View>

                            )}

                            {image && (
                                <Image
                                    style=
                                    {
                                        {
                                            width: '95%',
                                            height: 150,
                                        }
                                    }
                                    source={{ uri: image }}
                                />
                            )}
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                        <Text style={styles.text}>Criar Evento</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <StatusBar />
        </SafeAreaView>
    );
}