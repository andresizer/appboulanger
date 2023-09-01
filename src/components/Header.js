import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";

import Texto from './Texto';

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={estilos.container}>
      <Texto style={estilos.texto}>{headerText}</Texto>
      <FontAwesome name={headerIcon} size={24} color="#b56a65" />
    </View>
  )
}

export default Header

const estilos = StyleSheet.create({
    container: {
      flexDirection: "row",
    },

    texto: {
      flex: 1,
      fontSize: 22,
      maxHeight: 700,
    },

})