import { StyleSheet, Text, View, TextInput, TextInputComponent } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchFilter from '../components/SearchFilter';
import { SafeAreaView } from 'react-native-safe-area-context';

import Texto from '../components/Texto';
import FiltroCategorias from '../components/FiltroCategorias';
import CardsReceitas from '../components/CardsReceitas';




export default function TelaListaReceitas({ route })  {

  const { userName } = route.params;
  
    return (
      <SafeAreaView style={estilos.container}>
        <StatusBar />

        {/* Header Render */}
        <View style={estilos.header}>
          <Header  headerText={`Olá, ${userName}`} headerIcon={"bell-o"} />
        </View>
        {/* Barra de Filtro Render */}
        <SearchFilter icon={"search"} placeholder={"Digite a fórmula que desejas encontrar"} />

        {/* Categorias Render */}
        <View style={{marginTop: 22}}>
          <Texto style={estilos.textoCategorias}>Categorias</Texto>
          <FiltroCategorias />
        </View>

        {/* Receitas Render */}
        <View style={{marginTop: 22, flex: 1}}>
          <Texto style={estilos.textoCategorias}>Receitas</Texto>
         <CardsReceitas />
        </View>

      </SafeAreaView>  
        
    ); 
};




const estilos = StyleSheet.create({

  container: {
    flex:1,
    margin:10,
  },

  header: {
    marginHorizontal: 16,
  },

  textoCategorias: {
    fontSize: 24,
    maxHeight: 700,
  },

})