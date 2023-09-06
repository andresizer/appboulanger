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
        justifyContent:"space-between", 
        marginTop: 28,
        width: "100%",
        alignItems: "center",
        backgroundColor:"#fff", 
        // borderTopWidth: 3,
        // borderLeftWidth: 3,
        // borderRightWidth:3,
        // borderColor: "lightgray",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        bottom: -10,
        elevation: 5,
        
        
        


        }}>
          <Pressable
          onPress={() => navigation.navigate("FaleConosco")}
          style={{
            margin: 10,
            padding: 5,
            backgroundColor: 'lightgray',
            elevation: 3,
            borderRadius: 10,
            borderWidth:2,
            borderColor:"gray",        
          }}
          >
            <Texto style={{
                  fontSize: 24,
                  maxHeight: 700,
                  color: "#fff",
            }}>Fale conosco</Texto>
        
          </Pressable>
          <Texto style ={{
            marginBottom: 10,

          }}>Desenvolvido por André Sizer</Texto>
             
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