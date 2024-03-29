import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Image, Modal } from "react-native";
import { styles } from "./style";

import Header from "../../Header/Header";
import ProfileImage from "../../ProfileImage/ProfileImage";
import Calendario from "../../Modals/Calendar";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import { AuthContext } from "../../../contexts/auth";
import { createEvent, getEvent, updateEvent } from "../../../services/events";

import axios from 'axios'

export default function MarcarEventos({ navigation }, props) {
  const {
    id,
    event_id,
    updatingEvent,
    setUpdatingEvent,
    marker,
    setAlterMapPermission,
  } = useContext(AuthContext);
  const { profilePicture, username } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [localization, setLocalization] = useState();
  const [street, setStreet] = useState('')
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [date, setDate] = useState(null)
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [eventId, setEventId] = useState(null);

  const [galleryPermission, setGalleryPermission] = useState(null);

  const [descriptionLength, setDescriptionLength] = useState(0);
  const [nameEventLength, setNameEventLength] = useState(0);

  const [visible, setVisible] = useState(false)

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
  };
  const handleSubmit = async () => {
    console.log(marker);
    if (!image) {
      alert("Insira uma imagem no evento!");
    } else {
      console.log(
        id,
        name,
        localization,
        description,
        day,
        month,
        year,
        hour,
        minute
      );
      const eventDate = `${year}/${month}/${day}`;
      const eventHour = `${hour}:${minute}`;
      await createEvent(
        id,
        name,
        date,
        eventHour,
        localization,
        description,
        image,
        setImage,
        marker,
        updatingEvent,
        eventId
      );
    }
  };

  const getEspecificEvent = async () => {
    await getEvent(id, event_id).then((event) => {
      console.log(event[0]);
      setName(event[0].event_name);
      setEventId(event[0].id);
      setImage(event[0].photo);
      // setDate(event[0].event_date)
      setHour(event[0].event_hour);
      setLocalization(event[0].localization);
      setDescription(event[0].description);
      // setLatitude(event[0].latitude)
      // setLongitude(event[0].longitude)
    });
  };

  const handleCep = async (cep) => {
    if (cep.length == 8) {
      try {
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        setStreet(`${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.cep}`)
        console.log(data);
      } catch(err) {
        alert('CEP Inválido!')
        console.log(err);
      }
    }
    else {
      console.log('teste');
    }
  }

  useEffect(() => {
    if (updatingEvent) {
      getEspecificEvent();
      console.log("okkkk");
    }
  }, [event_id]);

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="calendar" color="#FFF" size={26} />
      </View>

      <View style={styles.postContainer}>
        <ProfileImage profileImage={profilePicture} />
        <Text style={styles.profileName}>{username}</Text>
      </View>

      <View style={styles.form}>
        <KeyboardAvoidingView behavior={"padding"}>

          <Text style={styles.formText}>Nome do Evento</Text>

          <View style={styles.nameInputs}>
            <TextInput
              style={styles.inputType1}
              value={name}
              onChangeText={(text) => {
                setName(text)
                setNameEventLength(text.length)
              }}
              keyboardType="default"
              maxLength={25}
            />

            <Text style={styles.eventNameLengthText}>
              {nameEventLength} / 25
            </Text>

          </View>

          <Text style={styles.formText}>Data</Text>
          {/* <View style={styles.dataInputs}>

            <TextInput
              style={styles.inputType2}
              onChangeText={(text) => setDay(text)}
              placeholder="Dia"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.inputType2}
              onChangeText={(text) => setMonth(text)}
              placeholder="Mês"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.inputType2}
              onChangeText={(text) => setYear(text)}
              placeholder="Ano"
              keyboardType="numeric"
            />

          </View> */}

          <View style={styles.borderLocationInput}>
            <View style={styles.locationInput}>
              <TextInput style={styles.inputType4} value={date} />
              <TouchableOpacity
                style={styles.iconInput}
                onPress={() => setVisible(true)}
              >
                <AntDesign name="calendar" size={26} color="#F8670E" />
              </TouchableOpacity>
            </View>
          </View>


          <Modal
            visible={visible}
            transparent={true}
            onRequestClose={() => setVisible(false)
            }
          >
            <Calendario setDate={setDate} handleClose={() => setVisible(false)} />

          </Modal>

          <Text style={styles.formText}>Hora</Text>

          <View style={styles.horaInputs}>
            <TextInput
              style={styles.inputType2}
              onChangeText={(text) => setHour(text)}
              placeholder="hh"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.inputType2}
              onChangeText={(text) => setMinute(text)}
              placeholder="min"
              keyboardType="numeric"
            />

            <View style={styles.invisbleInput} />
          </View>

          <Text style={styles.formText}>Local</Text>

          <View style={styles.borderLocationInput}>
            <View style={styles.locationInput}>
              <TextInput
                style={styles.inputType5}
                onChangeText={(text) => {
                  setLocalization(text)
                  handleCep(text)
                }}
                keyboardType="numeric"
                placeholder="CEP"
                maxLength={8}
              />
              {/* <TouchableOpacity
                style={styles.iconInput}
                onPress={() => {
                  setAlterMapPermission(true);
                  navigation.navigate("Mapa");
                }}
              >
                <Entypo name="location" size={22} color="#F8670E" />
              </TouchableOpacity> */}
            </View>
          </View>

          <View style={styles.borderLocationInput}>
              <Text style={styles.locationText}>{street}</Text>
          </View>

          <Text style={styles.formText}>Descrição</Text>
          <View style={styles.nameInputs}>
            <TextInput
              style={styles.inputType3}
              maxLength={200}
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                setDescriptionLength(text.length);
              }}
              keyboardType="default"
              multiline={true}
            />

            <Text style={styles.descriptionLengthText}>
              {descriptionLength} / 200
            </Text>
          </View>

          <View style={styles.bannerContainer}>
            <Text style={styles.formText}>Foto</Text>

            <View style={styles.banner}>
              <TouchableOpacity
                onPress={() => pickImage()}
                style={styles.editProfileIconContainerBanner}
              >
                {!image && (
                  <View style={styles.editBanner}>
                    <Entypo name="camera" size={22} color="#FFF" />
                  </View>
                )}

                {image && (
                  <Image
                    style={{
                      width: "100%",
                      height: 150,
                    }}
                    source={{ uri: image }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={styles.button}
          >
            <Text style={styles.textButton}>Criar Evento</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

    </ScrollView>
  );
}
