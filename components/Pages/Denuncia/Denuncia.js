import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'

export default function ComplaintModal() {
  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <View style={styles.headerModal}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.headerModalText}>Denunciar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.modal}>
          <View style={styles.optionsComplaint}>

            <Text style={styles.title}>Denuncie publicações que contenham:</Text>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Nudez explícita</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Ofensas e ameaças</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Discurso de ódio</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Bullying ou assédio</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Automutilação</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Violação da propriedade intelectual</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Venda de produtos ilícitos</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Golpe ou fraude</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Informação falsa</Text>
            </View>

            <View style={styles.info}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.infoText}>Spam</Text>
            </View>

            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.complaintButton}>
                <Text style={styles.complaintText}>Denunciar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View >
  );
}

