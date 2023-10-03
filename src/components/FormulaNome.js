import { StyleSheet, FlatList, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import Texto from './Texto'
import { ListaReceitas } from '../Constant'

const width = Dimensions.get('screen').width;

const FormulaNome = ({ route }) => {

      
    const [quantidade, setQuantidade] = useState(30);
    const [peso, setPeso] = useState(100);

    const valoresIngredientes = item.quantidades;
    const valoresAtualizados = valoresIngredientes.map(numero => numero * quantidade * peso);
    const valoresArredondados = valoresAtualizados.map(numero => Math.round(numero));

    
  return (
  <View >

        
           
  </View>
  )
}

export default FormulaNome

const estilos = StyleSheet.create({

    label: {
        fontSize: 16,
        marginBottom: 5,
        alignSelf: 'center',
        maxHeight: 700,
      },

})