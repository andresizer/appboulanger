import { StyleSheet, Text, SafeAreaView, TextInput, TextInputComponent } from 'react-native';
import React from 'react';
import Header from '../components/Header';



export default function TelaListaReceitas({ route })  {

  const { userName } = route.params;
  
    return (
      <SafeAreaView style={{flex:1, marginHorizontal: 16, marginTop:40}}>
        
        <Header headerText={`Olá, ${userName}`} headerIcon={"bell-o"}>
          
        </Header>
        

      </SafeAreaView>  
        
    ); 
};




const estilos = StyleSheet.create({

})