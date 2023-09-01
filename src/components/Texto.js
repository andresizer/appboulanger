import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {

    let estilo = estilos.texto;

    if( style?.maxHeight == "700") {
        estilo = estilos.textoNegrito
    };

    if(style?.maxHeight == "900") {
        estilo = estilos.textoBlack
    };


      
    return <Text style={[style, estilo]}>{ children }</Text>
};

const estilos = StyleSheet.create({

    texto: {
        fontFamily: "MontserratPadrao",
    },

    textoNegrito: {
        fontFamily: "MontserratNegrito",
    },

    textoBlack: {
        fontFamily: "MontserratBlack",
    },
    
});