import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

import Header from "../../Header/Header";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState([]);

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
    setMarker([...marker, coordinate])
  }

  console.log(marker);

  return (
    <View style={styles.container}>
      <Header />
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
        style={styles.map}
        initialRegion={{
          latitude: 37.42597730214824,
          longitude: -122.0856026405,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        loadingEnabled
        mapType="mutedStandard"
      >
        {marker.length > 0 && (
          marker.map((m) => {
            return <Marker coordinate={m} key={Math.random().toString()} />
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
  map: {
    width: '100%',
    height: '95%',
  },
});