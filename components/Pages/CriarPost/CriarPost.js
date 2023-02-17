import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";

import { TextInput } from 'react-native-gesture-handler';
import Header from "../../Header/Header";
import Button from "../../Button/Button";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { AuthContext } from '../../../contexts/auth';

import ProfileImage from "../../ProfileImage/ProfileImage";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import CreatePost from "../../../services/createPost.js";

export default function CriarPost({ navigation }) {
  const { profilePicture } = useContext(AuthContext);
  const { nickname } = useContext(AuthContext);
  const { id } = useContext(AuthContext);
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  // const [type, setType] = useState(CameraType.back);
  // const [cameraPermission, setCameraPermission] = useState(null);
  // const [camera, setCamera] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // CameraPermisionFunction();
    setGalleryPermission(false);
  }, []);

  const galeryPermisionFunction = async () => {
    const galleryPermissions = await MediaLibrary.requestPermissionsAsync();

    console.log('teste1: ', galleryPermissions.granted)

    setGalleryPermission(galleryPermissions.granted);

    (galleryPermission) ? pickImage() : ''
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

  return (
    <ScrollView>
            <View style={styles.container}>
                <StatusBar/>
                <Header />
                
                <View style={styles.photoContainer}>
                    <TouchableOpacity style={{alignSelf: 'center'}}>
                        <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
                    </TouchableOpacity>
                </View>

                <View style={styles.postContainer}>
                    <View style={styles.postProfile}>
                        <ProfileImage profileImage={profilePicture} />
                        <View style={styles.profileContainer}>
                            <Text style={styles.profileName}>{nickname}</Text>
                        </View>
                    </View>

                    <View>
                        <Image style={styles.postImage} source={{ uri: image}} />

                        <TextInput 
                            style={styles.input} 
                            multiline 
                            textAlign='center' 
                            placeholder='Fale sobre uma aventura aqui!' 
                            placeholderTextColor={"#7B7B7B"}
                            maxLength={400}
                            onChangeText={(value) => {setCaption(value)}}
                        />
                    </View>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Entypo name="camera" size={26} color={'#fff'} />
                        <Text style={styles.buttonText}>Câmera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      if(galleryPermission == true)
                      {
                        pickImage();
                      }else{
                        galeryPermisionFunction();
                      }
                    }} style={styles.button}>
                        <MaterialCommunityIcons name="camera-plus" size={26} color={'#fff'} />
                        <Text style={styles.buttonText}>Adicionar foto/imagem</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="place" size={26} color={'#fff'} />
                        <Text style={styles.buttonText}>Localização</Text>
                    </TouchableOpacity>
                </View>

                <Button buttonText='Criar Post' pressFunction={() => {
                    CreatePost(image, id, caption)
                    navigation.navigate('Feed')
                    }}
                />
            </View>
        </ScrollView>
  );
}

export default CriarPost;