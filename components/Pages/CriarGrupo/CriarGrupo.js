import React, { useContext, useState } from "react";
import { View, Text, TextInput, StatusBar, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./style"
import Header from "../../Header/Header";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { handleCreateGroup } from "../../../services/chat";
import { AuthContext } from "../../../contexts/auth";

export default function CriarGrupo({ navigation }) {
    const { id, groupId, setGroupId } = useContext(AuthContext)
    const [chatName, setChatName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);

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
        }
    };

    const handleSubmit = async () => {
        await handleCreateGroup(image, chatName, description, id, setGroupId)
            .then(() => {
                navigation.navigate("Adicionar Participantes")
            })
    }
    return (
        <View style={styles.container}>

            <Header navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Criar grupo</Text>
            </View>

            <ScrollView>
                <View style={styles.form}>

                    <Text style={styles.formText}>Nome do Grupo</Text>

                    <View style={styles.nameInputs}>
                        <TextInput
                            value={chatName}
                            onChangeText={(text) => setChatName(text)}
                            style={styles.inputType1}
                            keyboardType="default"
                        />
                    </View>

                    <Text style={styles.formText}>Descrição do grupo</Text>
                    <View style={styles.nameInputs}>
                        <TextInput style={styles.inputType1}
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                            keyboardType="default"
                        />
                    </View>

                    <View style={{ marginVertical: 30 }}>
                        <Text style={styles.formText}>Foto do grupo</Text>

                        <View style={styles.banner}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (galleryPermission == true) {
                                        pickImage();
                                    } else {
                                        galeryPermisionFunction();
                                    }
                                }}
                                style={styles.editProfileIconContainerBanner}
                            >
                                {image ? (
                                    <Image source={{ uri: image }} style={styles.editBanner} />
                                ) : (
                                    <View style={styles.editBanner}>
                                        <Entypo name="camera" size={22} color="#FFF" />
                                    </View>
                                )}

                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={styles.text}>Criar Grupo</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <StatusBar barStyle={'light-content'} />
        </View>
    );
}