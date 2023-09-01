import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { ListaReceitas } from '../Constant'
import { cores } from '../Constant'

import Texto from './Texto'

const CardsReceitas = () => {
  return (
    <View>
      <FlatList 
      data={ListaReceitas} 
      renderItem={({ item })=> 
      <Pressable 
      onPress={() => alert("hi")}
      style={{
        backgroundColor: cores.COR_LIGHT,
        elevation: 3,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,


        }}>
        <Image source={item.image} style={{width: 150, height: 150, resizeMode: "center"}} />
        <Texto>{item.nome}</Texto>
        <View></View>
      </Pressable> }
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-around',
      }}
      showsVerticalScrollIndicator={false}
      />
      
    </View>
  )
}

export default CardsReceitas

const styles = StyleSheet.create({})