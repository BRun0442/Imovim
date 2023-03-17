import React, { useState, useEffect, useContext } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image, Alert } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from './style.js'
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";
import { AuthContext } from "../../../contexts/auth";
import { updateProfile } from "../../../services/profile";
import { AccountDataContext } from "../../../contexts/accountData";
import getUserData from "../../../services/user";
import { validateCity } from "../../../services/getCities";

function EditarPerfil({ navigation }) {
    const { id, setProfilePicture } = useContext(AuthContext)
    const { setAccountData } = useContext(AccountDataContext);
    const [image, setImage] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [localization, setLocalization] = useState('');
    const [loaded, setLoaded] = useState(false)

    const handleSubmit = async () => {
        if(await validateCity(localization)) {
            await updateProfile(image, id, backgroundImage, localization, setProfilePicture)
                .then(async () => {
                    await getUserData(id, setAccountData)
                    Alert.alert('Perfil atualizado!')
                    navigation.navigate('Meu Perfil')
                })
        }
        else {
            Alert.alert('Cidade invalida!')
        }
    }

    const [galleryPermission, setGalleryPermission] = useState(null);
    const galeryPermisionFunction = async () => {
        const galleryPermissions = await MediaLibrary.requestPermissionsAsync();
        setGalleryPermission(galleryPermissions.granted);
    };

    const pickImage = async (set) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            //   aspect: [1, 1],
            //   quality: 1,
        });

        if (!result.cancelled) {
            set(result.uri)
            console.log(result.uri)
            // UploadImage(result.uri, setImageUrl)  // PRECISAMOS ARRUMAR ESSA GAMBIARRA!!!
        }
    };
    const main = (set) => {
        if (galleryPermission == true) {
            pickImage(set);
        } else {
            galeryPermisionFunction();
        }
    }

    useEffect(() => {
        galeryPermisionFunction();
        const getProfileData = async () => {
            await axios.get(`https://imovim-api.cyclic.app/profile/get-editingProfile-data/${id}`)
                .then((res) => {
                    console.log(res.data)
                    res.data.forEach(element => {
                        setImage(element.profileImage)
                        setBackgroundImage(element.profileBackground)
                        setLocalization(element.localization)
                        setLoaded(true)
                    });
                })
        }
        getProfileData()
    }, [])
    if (!loaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Editar Perfil</Text>
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Entypo name="save" size={35} color="#F8670E" />
                </TouchableOpacity>
            </View>

            <View style={styles.editProfileContainer}>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto do Perfil</Text>
                </View>

                <TouchableOpacity onPress={() => main(setImage)} style={styles.editProfileIconContainerPhoto}>
                    {!image && (
                        <View style={styles.editPhoto}>
                            <Entypo name="camera" size={22} color="#ADADAD" />
                        </View>
                    )}
                    {image && (
                        <Image
                            style=
                            {
                                {
                                    width: 160,
                                    height: 160,
                                    borderRadius: 100
                                }
                            }
                            source={{ uri: image }}
                        />
                    )}


                </TouchableOpacity>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto de Capa</Text>
                </View>

                <TouchableOpacity onPress={() => main(setBackgroundImage)} style={styles.editProfileIconContainerBanner}>
                    {!backgroundImage && (
                        <View style={styles.editBanner}>
                            <Entypo name="camera" size={22} color="#ADADAD" />
                        </View>
                    )}
                    {backgroundImage && (
                        <Image
                            style=
                            {
                                {
                                    width: '95%',
                                    height: 150,
                                }
                            }
                            source={{ uri: backgroundImage }}
                        />
                    )}
                </TouchableOpacity>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Cidade</Text>
                </View>

                <View style={styles.editProfileIconContainerInput}>
                    <TextInput value={localization} onChangeText={(text) => { setLocalization(text) }} style={styles.input} />
                </View>

            </View>
            <StatusBar />
        </ScrollView>
    )
}

export default EditarPerfil;