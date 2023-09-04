import { StyleSheet, Text, View, Image, Pressable, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";

import Texto from './Texto';

const FormulasReceitas = ({ navigation, route }) => {

    const {item} = route.params;

    console.log(item.quantidades);

    let [ingredientes, setIngredientes] = useState(item.quantidades); 
  
    const [quantidade, setQuantidade] = useState(1);
    const [peso, setPeso] = useState(100);

    const valoresIngredientes = item.quantidades;

    const valoresAtualizados = valoresIngredientes.map(numero => numero * quantidade * peso);

    const valoresArredondados = valoresAtualizados.map(numero => Math.round(numero));

    console.log(valoresArredondados);

    const handleSubmit = () => {
        // Lógica para lidar com os valores submetidos
        console.log('Quantidade:', quantidade);
        console.log('Peso:', peso);
    };

    const handleFormSubmit = () => {
        const qunantidadesAtualizadas = item.quantidades * quantidade * peso;


        setIngredientes(qunantidadesAtualizadas);
    }



   
  






  return (
    <View style={{ backgroundColor: "#6f4e37", flex: 1 }}>
        <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
            <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <FontAwesome name={"heart-o"} size={28} color="white" />
        </SafeAreaView>
        <View style={{
            backgroundColor: "#fff",
            flex: 1,
            marginTop: 240,
            borderTopLeftRadius: 56,
            borderTopRightRadius: 56,
            alignItems: "center",
        }}>
            
        <View style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
        }}> 
        <Image source={item.image} style={{width:"100%", height:"100%", resizeMode: "contain"}} />
        </View>
        <View style={{
            flex:1, 
            flexDirection: "row",
            alignItems: "center",
            margin: 20,
            }}>
            
            <FlatList 
                data={item.ingredientes}
                renderItem={({ item }) => (
                    <Texto style={{fontSize: 20, maxHeight: 700}}>{item}</Texto>
                )}
            />

            <FlatList 
                data={valoresArredondados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Texto style={{fontSize: 20, maxHeight: 700}}>{item}</Texto>
                )}
            />  
            
        </View>
        <View style={estilos.subcontainer}>
            <Texto style={estilos.label}>Quantidade: </Texto>
            <TextInput
                style={estilos.input}
                value={quantidade}
                onChangeText={text => setQuantidade(text)}
                keyboardType='numeric'
            />
            <Texto style={estilos.label}> Peso: </Texto>
            <TextInput
                style={estilos.input}
                value={peso}
                onChangeText={text => setPeso(text)}
                keyboardType='numeric'
            />
            </View>
            {/* <View style={estilos.botoes}>  
                <Button title="Submit" onPress={handleFormSubmit} />
                
            </View>  */}
        </View>
        
    </View>
  )
}

export default FormulasReceitas

const estilos = StyleSheet.create({
    subcontainer: {
        position: 'relative',
        flexDirection:'row',
        alignItems:'center',
    },
    formula: {
        position: 'relative',
        margin: 10,
        flexDirection: 'column',
        lineHeight:24,
    },
    botoes: {
        gap: 20,
        margin: 10,
    },
    container: {
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      input: {
        width: '20%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
})