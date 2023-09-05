import { FlatList, StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { ListaReceitas } from '../Constant'
import { cores } from '../Constant'

import Texto from './Texto'
import { useNavigation } from '@react-navigation/native'


const width = Dimensions.get('screen').width

let column = 2

if (width > 500) column = 3;
if (width > 700) column = 4;

const CardsReceitas = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList 
      data={ListaReceitas} 
      renderItem={({ item })=> 
      <Pressable 
      onPress={() => navigation.navigate("FormulasReceitas", { item:item })}
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
      numColumns={column}
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