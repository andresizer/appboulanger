import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categorias } from '../Constant'
import { cores } from '../Constant'
import Texto from './Texto'

const FiltroCategorias = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categorias.map((categoria, index) => {
          return (
            <View style={{
              backgroundColor: index ===0 ? cores.COR_PRIMARIA : cores.COR_LIGHT,
              marginRight: 36,
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 10,
              marginVertical: 16,
            
              ///iOS
              // shadowColor: "#fff",
              // shadowOffset: {width:0, height:1},
              // shadowOpacity: 0.2,
              // shadowRadius: 7,
              elevation: 12,
              }}> 
                <Texto style={{color: index === 0 && cores.COR_LIGHT}}>{categoria.nome}</Texto>
            </View>
          );
        })}

      </ScrollView>
    </View>
  );
}

export default FiltroCategorias

const estilos = StyleSheet.create({})