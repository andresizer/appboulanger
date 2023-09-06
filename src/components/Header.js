import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { FontAwesome } from "@expo/vector-icons";

import Texto from './Texto';

import { useNavigation } from '@react-navigation/native';



const Header = ({ headerText, headerIcon }) => {

  const navigation = useNavigation();
  
  return (
    <View style={estilos.container}>
      <Texto style={estilos.texto}>{headerText}</Texto>
      <Pressable
          onPress={() => navigation.navigate("FormularioReport")}
          >
            <FontAwesome name={headerIcon} size={24} color="#b56a65" />
      </Pressable>  
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