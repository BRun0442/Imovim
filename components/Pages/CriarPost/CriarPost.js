import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar, Alert } from "react-native";
import { styles } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../Header/Header";
import Line from "../../Line/Line";
import Button from "../../Button/Button";
import Post from "../../Post/Post";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ProfileImage from "../../ProfileImage/ProfileImage";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import CreatePost from "../../../services/createPost.js";

export default function CriarPost(props) {
  // const [type, setType] = useState(CameraType.back);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const GaleryPermisionFunction = async () => {
    const galleryPermissions = await MediaLibrary.requestPermissionsAsync();
    setGalleryPermission(galleryPermissions.status === "granted");
    console.log(galleryPermissions.status);
    if (galleryStatus !== "granted") {
      alert("Sorry, you are not allowed to do it");
    }
  };

  useEffect(() => {
    // CameraPermisionFunction();

    GaleryPermisionFunction();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      //   aspect: [1, 1],
      //   quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
        // UploadImage(result.uri, setImageUrl)  // PRECISAMOS ARRUMAR ESSA GAMBIARRA!!!
    }
    console.log(result);
  };
  return (
    <View style={styles.container}>
      <StatusBar />

      <Header />

      <View style={styles.photoContainer}>
        <TouchableOpacity styles={styles.button}>
          <MaterialCommunityIcons name="camera" color={"#fff"} size={26} />
        </TouchableOpacity>
      </View>
      <Line />

      <View style={styles.postContainer}>
        <View style={styles.postProfile}>
          <ProfileImage profileImage={props.profileImage} />

          <View style={styles.profileContainer}>
            <Text style={styles.profileName}>{props.profileName}</Text>
          </View>
        </View>

        <View style={{ maxHeight: 200, maxWidth: 350 }}>
          <Image style={styles.postImage} source={{ uri: image }} />
          <Text style={styles.coment}>{props.coment}</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Entypo name="camera" size={26} color={"#fff"} />
          <Text style={styles.buttonText}>Câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert("sksskk")}
          style={styles.button}
        >
          <MaterialCommunityIcons name="camera-plus" size={26} color={"#fff"} />
          <Text style={styles.buttonText}>Adicionar foto/imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="place" size={26} color={"#fff"} />
          <Text style={styles.buttonText}>Localização</Text>
        </TouchableOpacity>
      </View>
      {/* Esses botoes roxo n estao funcionando por isso estou usando 
            uma gambiarra cm esse botao laranja, 
            mas e so para fazer o upload da imagem */}
      <Button pressFunction={pickImage} buttonText="Selecionar Imagem" />
      <Button
        pressFunction={() => CreatePost(image, 2, "osmar viado")}
        buttonText="Criar Post"
      />
    </View>
  );
}
