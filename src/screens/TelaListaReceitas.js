import { StyleSheet, Text, View, TextInput, TextInputComponent,Pressable } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchFilter from '../components/SearchFilter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

import Texto from '../components/Texto';
import FiltroCategorias from '../components/FiltroCategorias';
import CardsReceitas from '../components/CardsReceitas';
import FormularioReport from '../components/FormularioReport';





export default function TelaListaReceitas({ route })  {

  const { userName } = route.params;
  
  const navigation = useNavigation();
  
    return (
      <SafeAreaView style={estilos.container}>
        <StatusBar />

        {/* Header Render */}
        <View style={estilos.header}>
          <Header  headerText={`Olá, ${userName}`} headerIcon={"bug"} />
        </View>
        
        {/* Barra de Filtro Render */}
        {/* <SearchFilter icon={"search"} placeholder={"Digite a fórmula que desejas encontrar"} /> */}

        {/* Categorias Render */}
        {/* <View style={{marginTop: 22}}>
          <Texto style={estilos.textoCategorias}>Categorias</Texto>
          <FiltroCategorias />
        </View> */}

        {/* Receitas Render */}
        <View style={{marginTop: 22, flex: 1}}>
          <Texto style={estilos.textoCategorias}>Receitas</Texto>
         <CardsReceitas />
        </View>
      {/* Formulario Report Render */}
      <View style={{
        marginTop: 22, 
        flexDirection:"row", 
        justifyContent:"space-between", 
        marginTop:40, 
        paddingHorizontal: 30,
        alignItems: "center", 
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 20,
        
        


        }}>
          <Pressable
          onPress={() => navigation.navigate("FaleConosco")}
          >
            <Texto style={estilos.textoCategorias}>Fale conosco</Texto>
        
          </Pressable>
          <Texto>Desenvolvido por André Sizer</Texto>
             
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