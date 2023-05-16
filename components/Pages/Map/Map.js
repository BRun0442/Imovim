import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import MapView, { Marker } from "react-native-maps";
import { AuthContext } from "../../../contexts/auth";

import * as Location from "expo-location";

import Header from "../../Header/Header";
import { Entypo } from '@expo/vector-icons';

export default function Map() {
  const [location, setLocation] = useState(null);
  const { marker, setMarker } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      let { status } =
        await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(location);

  const handleNewMarker = (coordinate) => {
    setMarker([coordinate])
  }

  console.log(marker);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mapas</Text>

        <TouchableOpacity>
          <Entypo name="save" size={35} color="#F8670E" />
        </TouchableOpacity>
      </View>

      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: -23.641265730271293,
          longitude: -46.83605662739835,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        loadingEnabled
        mapType="mutedStandard"
      >
        {marker.length > 0 && (
          marker.map((m) => {
            return (
              <Marker
                coordinate={m}
                key={Math.random().toString()}
                pinColor="#F8670E"
              // title="Local do evento"
              // description="Local do evento"
              />
            )
          })
        )}
      </MapView>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    height: "7%",

    paddingHorizontal: 15,

    backgroundColor: "#FFF"

  },

  title: {
    fontSize: 18,
    fontWeight: "600"
  },

  map: {
    width: '100%',
    height: '87%',
  },
});