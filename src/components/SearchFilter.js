import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View style={estilos.container}
    >
        <FontAwesome name={icon} size={20} color="#b56a65" />
      <TextInput style={estilos.inputBox} placeholder='Digite a receita que está buscando' />
    </View>
  )
}

export default SearchFilter

const estilos = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        flexDirection: "row",
        padding: 10,
        borderRadius: 8,
        margin: 16,
        //iOS
        // shadowColor: "#000",
        // shadowOffset: {width: 0, height: 4},
        // shadowOpacity: 0.1,
        // shadowRadius: 7,
        elevation: 12,
    },
      
    inputBox: {
        paddingLeft: 8, 
        fontSize: 14, 
        fontFamily: "MontserratPadrao", 
        width:"100%",
        color: "#808080",
        
    },

})
