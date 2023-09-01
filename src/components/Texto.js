import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {

    let estilo = estilos.texto;

    if( style?.fonte === "negrito") {
        estilo = estilos.textoNegrito
    };

    if(style?.fonte === "black") {
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