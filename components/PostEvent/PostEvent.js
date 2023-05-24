import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./style";
import ProfileImage from "../ProfileImage/ProfileImage";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

import CardEvents from "../CardEvent/CardEvent";

let screenWidth = Dimensions.get("window").width / 100; // screen width

export default function PostEvent(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(0);

  async function getImagesSize() {
    // Use the width and height props to optimize
    await Image.getSize(props.image, (width, height) => {
      setHeight(height);
      setWidth(width);
    })

    setAspectRatio(width / height)
  }

  useEffect(() => {
    // if image is empty it doesnt call function
    props.photo && getImagesSize();
  })

  const [iGo, setIGo] = useState(0)
  const [saveEvent, setSaveEvent] = useState(false)

  return (
    <View style={styles.postContainer}>

      <View style={styles.postProfile}>

        <ProfileImage profileImage={props.profileImage} />

        <View style={styles.profileContainer}>

          <View style={styles.profilePost}>
            <Text style={styles.profileName}>{props.nickname}</Text>
            <Text style={styles.newEvent}>criou um evento!</Text>
          </View>

          <Text style={styles.postDate}>{props.created_at}</Text>

        </View>

      </View>

      <View style={{ paddingHorizontal: 10 }}>

        <CardEvents
          eventName={props.event_name}
          eventImage={props.photo}
          describeEvent={props.description}
        />

      </View>

      <View style={styles.interactiveButtonContainer}>

        <TouchableOpacity
          style={styles.interactiveButton}
          onPress={() => setIGo(iGo + 1)}
        >

          <AntDesign name="like1" size={50} color={"#FFF"} />
          <Text style={styles.interactiveText}>Eu vou!</Text>

          <View style={styles.iGoContainer}>
            <Text style={styles.iGo}>{iGo}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactiveButton}
          onPress={() => setSaveEvent(!saveEvent)}
        >

          {saveEvent ? (
            <View style={styles.iconContainer}>
              <Feather name="check-circle" size={55} color="#8B04A2" />
              <Text style={styles.interactiveText}>Salvo</Text>
            </View>
          )
            :
            (
              <View style={styles.iconContainer}>
                <Ionicons name="add-circle-outline" size={75} color="#FFF" />
                <Text style={styles.interactiveText}>Salvar</Text>
              </View>
            )
          }

        </TouchableOpacity>
      </View>

    </View>
  )
}