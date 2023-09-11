import { Dimensions, Image, StyleSheet, TouchableOpacity, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import bakerImage from "../../assets/img/baker.jpg";
import Texto from '../components/Texto';


const width = Dimensions.get('screen').width;

const WelcomeScreen = ({ navigation }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
      setInputValue(text);
    };
 
    return (

    <SafeAreaView style={estilos.View}>
        <StatusBar animated={true} translucent={true} barStyle={'dark-mode'} />
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
        </SafeAreaView>
  )
}

export default WelcomeScreen

const estilos = StyleSheet.create({
    View: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
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
        maxHeight: "700",
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 6,
    },
        
    subtitulo: {
        color: "#d5a57f",
        fontSize: 20,
        marginHorizontal: 20,
        textAlign: "center",
        marginTop: 20,
        padding: 15,
        maxHeight: "700"
    },

    texto:{
        fontSize: 24,
        color: "#fff",
        maxHeight: "900",
        textShadowColor: "#000",
        textShadowOffset: {width: 0.1, height: 0.1},
        textShadowRadius: 10,
    },
    botao: {
        backgroundColor: "#d2d09f",
        borderRadius: 18,
        paddingVertical: 18,
        width: width * 0.8,
        alignItems: "center",
        marginTop: 40,
        elevation: 6
    },
    inputbox:{
        borderColor:"gray",
        borderWidth: 3,
        width: width*0.6,
        height: 40,
        borderRadius:50,
        padding:10,
        paddingLeft:20,
        // textAlign:"center",
    },

})