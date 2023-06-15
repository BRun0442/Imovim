import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style'

import Header from '../../Header/Header';

import api from '../../../services/api';
import { AuthContext } from '../../../contexts/auth';

import { showToastError, showToastSuccess } from '../../Toast/Toast';

export default function ComplaintModal({ navigation }) {
  const { id, reportedPost } = useContext(AuthContext)
  const [select, setSelect] = useState(null)

  const handleReason = (reasonNumber) => {
    setSelect(reasonNumber)
  }

  const isSelected = (reasonNumber) => {
    if (reasonNumber == select) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = async () => {
    const reasons = [
      '', 'Nudez explicita', 'Ofensas e ameaças',
      'Discurso de ódio', 'Bullying ou assédio', 'Automutilação',
      'Violação de propriedade intelectual', 'Venda de produtos ilicitos',
      'Golpe ou fraude', 'Informação falsa', 'Spam'
    ]
    if (!select) {
      showToastError('Selecione uma das opções!')
    } else {
      const data = { post_id: reportedPost, user_id: id, motive: reasons[select] }
      const request = await api.post(`/report/create-complaint`, data)
      console.log(request.data);
      showToastSuccess('Denuncia enviada!')
      navigation.navigate('Página Inicial')
    }
  }

  return (
    <ScrollView style={styles.container}>

      <Header navigation={navigation} />

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
        <TouchableOpacity onPress={() => handleSubmit()} style={styles.complaintButton}>
          <Text style={styles.complaintText}>Denunciar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
  );
}

