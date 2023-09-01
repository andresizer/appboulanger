import { StyleSheet, Text, View, TextInput, TextInputComponent } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchFilter from '../components/SearchFilter';

import Texto from '../components/Texto';
import FiltroCategorias from '../components/FiltroCategorias';



export default function TelaListaReceitas({ route })  {

  const { userName } = route.params;
  
    return (
      <View style={estilos.container}>
        <StatusBar />

        {/* Header Render */}
        <Header headerText={`Olá, ${userName}`} headerIcon={"bell-o"} />

        {/* Barra de Filtro Render */}
        <SearchFilter icon={"search"} placeholder={"Digite a fórmula que desejas encontrar"} />

        {/* Categorias Render */}
        <View style={{marginTop: 22}}>
          <Texto style={estilos.textoCategorias}>Categorias</Texto>
          <FiltroCategorias />
        </View>


      </View>  
        
    ); 
};




const estilos = StyleSheet.create({

  container: {
    flex:1,
    marginHorizontal:16,
    marginTop:50,
  },

  textoCategorias: {
    fontSize: 24,
    maxHeight: 700,
  },

})