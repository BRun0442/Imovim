import React, { useState, useEffect, useContext } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import { styles } from './style.js'
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";
import { AuthContext } from "../../../contexts/auth";

function EditarPerfil() {
    const { id } = useContext(AuthContext)
    const handleSubmit = async (imageUrl) => {
        const data = {
            user_id: id,
            image: imageUrl
        }
        await axios.post(`https://imovim-api.cyclic.app/profile/update-profile-img`, data)
        .then((res) => {
            console.log(res)
        })
    }
    
    const [galleryPermission, setGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);
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
          handleSubmit(result.uri)
          console.log(result.uri)
          // UploadImage(result.uri, setImageUrl)  // PRECISAMOS ARRUMAR ESSA GAMBIARRA!!!
        }
      };
    const main = () => {
        if(galleryPermission == true)
            {
              pickImage();
            }else{
              galeryPermisionFunction();
            }
    }

    useEffect(() => {
        galeryPermisionFunction();
    })
    return (
        <ScrollView style={styles.container}>
            <Header />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Editar Perfil</Text>
                <Entypo name="save" size={35} color="#F8670E" />
            </View>

            <View style={styles.editProfileContainer}>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto do Perfil</Text>
                </View>

                <TouchableOpacity onPress={() => main()} style={styles.editProfileIconContainerPhoto}>
                    {!image && (
                    <View style={styles.editPhoto}>
                        <Entypo name="camera" size={22} color="#ADADAD" />
                    </View>
                    ) }
                    {image && (
                        <Image 
                       style =
                       {
                         {
                             width: 160,
                             height: 160,
                             borderRadius: 100
                         }
                       }
                       source={{uri: image}} 
                       /> 
                    )}
                                    
                    
                </TouchableOpacity>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Foto de Capa</Text>
                </View>

                <View style={styles.editProfileIconContainerBanner}>
                    <View style={styles.editBanner}>
                        <Entypo name="camera" size={22} color="#ADADAD" />
                    </View>
                </View>

                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.editProfileTitleContainer}>
                    <Text style={styles.editProfileTitle}>Cidade</Text>
                </View>

                <View style={styles.editProfileIconContainerInput}>
                    <TextInput style={styles.input} />
                </View>

            </View>
            <StatusBar />
        </ScrollView>
    )
}

export default EditarPerfil;