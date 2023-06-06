import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style'

import Header from '../../Header/Header';

export default function ComplaintModal() {
  const [select, setSelect] = useState(false)

  return (
    <ScrollView style={styles.container}>

      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Denunciar</Text>
      </View>

      <View style={styles.content}>

        <View style={styles.optionsComplaint}>

          <Text style={styles.titleComplaint}>Denuncie publicações que contenham:</Text>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(true)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Nudez explícita</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(true)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Ofensas e ameaças</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(false)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Discurso de ódio</Text>
          </View>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Bullying ou assédio</Text>
          </View>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Automutilação</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Violação da propriedade intelectual</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Venda de produtos ilícitos</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Golpe ou fraude</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
            </TouchableOpacity>

            <Text style={styles.infoText}>Informação falsa</Text>
          </View>

          <View style={styles.info}>

            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={styles.checkBoxContainer}
            >
              <View style={[styles.checkBox, select ? { backgroundColor: "#A512BD" } : { backgroundColor: "#FFF" }]}></View>
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

