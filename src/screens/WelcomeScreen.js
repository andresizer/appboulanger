import { Dimensions, Image, StyleSheet, TouchableOpacity, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';

import bakerImage from "../../assets/img/baker.jpg";
import Texto from '../components/Texto';
import InputBox from '../components/InputBox';


const width = Dimensions.get('screen').width;

const WelcomeScreen = ({ navigation, onValueChange }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
      setInputValue(text);
    };
  
    const handleButtonClick = () => {
      onValueChange(inputValue);
    };
 
    return (

    <View style={estilos.View}>
            <Image source={bakerImage} style={estilos.Baker} />

            <Texto style={estilos.subtitulo}>Tenha o controle das suas fórmulas de padeiro</Texto>

            <Texto style={estilos.titulo}>Boulanger APP</Texto>

            <TextInput 
            style={estilos.inputbox}
            placeholder="Digite o seu nome para entrar" 
            value={inputValue} 
            onChangeText={handleInputChange}
            />      

            <TouchableOpacity style={estilos.botao} 
            onPress={() => navigation.navigate("TelaListaReceitas", { userName: inputValue }) }
            >

            <Texto style={estilos.texto}>Entrar</Texto>

            </TouchableOpacity>
        </View>
  )
}

export default WelcomeScreen

const estilos = StyleSheet.create({
    View: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center"
    },

    Baker: {
        maxHeight: "50%",
        maxWidth: width,
    },

    titulo: {
        color: "#B56A65",
        fontSize: 42,
        textAlign: "center",
        padding: 20,
        fonte: "negrito"
    },
        
    subtitulo: {
        color: "#d5a57f",
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: "center",
        marginTop: 20,
        padding: 15,
        fonte: "negrito"
    },

    texto:{
        fontSize: 24,
        color: "#fff",
        fonte: "black"
    },
    botao: {
        backgroundColor: "#d2d09f",
        borderRadius: 18,
        paddingVertical: 18,
        width: width * 0.8,
        alignItems: "center",
        marginTop: 40,
    },
    inputbox:{
        borderColor:"black",
        borderWidth: 2,
        width: width*0.6,
        height: 40,
        borderRadius:50,
        padding:10,
        paddingLeft:20,
        // textAlign:"center",
    },

})