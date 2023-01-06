import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Pedometer } from 'expo-sensors';
import { HealthData } from '../../contexts/healthData';

function PedometerText()
{
  const {setStepsQuantity, stepsQuantity, availability, setAvailability} = useContext(HealthData);
  const [steps, setSteps] = useState(0);
  // const [pedometerAvailability, setPedometerAvailability] = useState("");
  
  function subscribe()
  {
    Pedometer.watchStepCount(
      (result) => {
        // console.log(result.steps)
        if(result.steps != undefined)
        {
          setSteps(result.steps)
        }
      }
    );
  }

  // Pedometer.isAvailableAsync().then(
  //   (value) => {setPedometerAvailability(String(value))},
  //   (error) => {
  //     setPedometerAvailability(String(error)); 
  //     // console.log(error)
  //   }
  // )

  return (
    <View>
      <Text style={styles.pedometerText}>{subscribe()} passos: {steps}</Text>
    </View>
  );
}

export default PedometerText;