import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style'

import Header from '../../Header/Header';

export default function ComplaintModal() {
  const [select, setSelect] = useState(false)
  const [reasons, setReasons] = useState([])

  const handleReason = (reasonNumber) => {
    let array = []
    reasons.forEach((reason) => {
      array.push(reason)
    })
    console.log(array);
    if (array.includes(reasonNumber)) {
      const index = array.indexOf(reasonNumber);
      array.splice(index, 1)
      setReasons(array)
      return false
    } else {
      array.push(reasonNumber)
      setReasons(array)
      return true
    }
  }

  const isSelected = (reasonNumber) => {
    if (reasons.includes(reasonNumber)) {
      return true
    } else {
      return false
    }
  }

  return (
    <ScrollView style={styles.container}>

      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Denunciar</Text>
      </View>

      <View style={styles.content}>

        <View style={styles.optionsComplaint}>

          <Text style={styles.titleComplaint}>Esta publicação contém:</Text>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(1)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(1) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Nudez explícita</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(2)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(2) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Ofensas e ameaças</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(3)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(3) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Discurso de ódio</Text>
          </View>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => handleReason(4)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(4) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Bullying ou assédio</Text>
          </View>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => handleReason(5)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(5) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Automutilação</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(6)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(6) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Violação da propriedade intelectual</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(7)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(7) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Venda de produtos ilícitos</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(8)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(8) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Golpe ou fraude</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(9)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(9) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Informação falsa</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => handleReason(10)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, isSelected(10) ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Spam</Text>
          </View>

        </View>

      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.complaintButton}>
          <Text style={styles.complaintText}>Denunciar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
  );
}

