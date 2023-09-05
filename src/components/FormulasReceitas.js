import { StyleSheet, View, Image, Pressable, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import NumericInput from 'react-native-numeric-input';

import Texto from './Texto';

const width = Dimensions.get('screen').width

const FormulasReceitas = ({ navigation, route }) => {

    const {item} = route.params;

    const [quantidade, setQuantidade] = useState(30);
    const [peso, setPeso] = useState(100);

    const valoresIngredientes = item.quantidades;
    const valoresAtualizados = valoresIngredientes.map(numero => numero * quantidade * peso);
    const valoresArredondados = valoresAtualizados.map(numero => Math.round(numero));

  return (
    <View style={{ backgroundColor: item.cor, flex: 1 }}>
        <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
            <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
            </Pressable>
            <FontAwesome name={"heart-o"} size={28} color="white" />
        </SafeAreaView>
       
            <View style={{
                backgroundColor: "#fff",
                flex: 1,
                marginTop: 150,
                borderTopLeftRadius: 56,
                borderTopRightRadius: 56,
                alignItems: "center",
                }}>
                <View style={{
                    height: 300,
                    width: 300,
                    position: "absolute",
                    top: -150,
                }}> 
                <Image source={item.image} style={{width:"100%", height:"100%", resizeMode: "contain"}} />
                </View>

                <View>
                    <Texto style ={{
                        top: 80,
                        marginTop: 10,
                        justifyContent:'center',
                        maxHeight:900,
                        fontSize:32,
                    }}
                    >{item.nome}</Texto>
                </View>

                <View style={{maxWidth: "100%"}}> 
                    <View style={{
                        flexDirection: 'row',
                        top: 100,
                        padding: 10,
                        width: width,
                        justifyContent:'space-around',
                    }}>
                        <Texto style={{fontSize: 22, maxHeight: 700}}>Ingredientes</Texto>
                        <Texto style={{fontSize: 22, maxHeight: 700}}>Peso (g)</Texto>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        top: 100,
                        padding: 10,
                        width: width,
                        justifyContent:'space-around',

                        }}>
                        <View>
                            {item.ingredientes.map((ingrediente) => {
                                return (
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <View style={{
                                        backgroundColor: item.cor,
                                        height: 10,
                                        width: 10,
                                        borderRadius: 5,
                                    }}>
                                        </View>
                                        <Texto style={{paddingHorizontal: 20, fontSize: 20, maxHeight: 700}}>{ingrediente}</Texto>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={{width:width/3}}>
                            <FlatList 
                                data={valoresArredondados}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Texto style={{alignSelf: "center",fontSize: 20, maxHeight: 700}}>{item}</Texto>
                                )}
                            />  
                        </View>
                    </View>    
                </View>
                <View style={{
                    flexDirection:'column',
                    alignItems:'center',
                    top: 100,
                    padding: 10,
                    width: '100%',
                    justifyContent: 'space-around',
                    paddingHorizontal:40,
                    }}>
                    <View style={{flexDirection: "row"}}>
                    <Texto style={estilos.label}>Qtd: </Texto>
                    <NumericInput 
                    value={quantidade} 
                    onChange={value => setQuantidade(value)} 
                    totalWidth={110} 
                    totalHeight={40} 
                    iconSize={25}
                    step={30}
                    valueType='integer'
                    rounded 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='gray' 
                    leftButtonBackgroundColor='gray'
                    />
                    <Texto style={estilos.label}> Peso un: </Texto>
                    <NumericInput
                    value={peso}
                    onChange={value => setPeso(value)}
                    totalWidth={110} 
                    totalHeight={40} 
                    iconSize={25}
                    step={10}
                    valueType='integer'
                    rounded 
                    iconStyle={{ color: 'white' }} 
                    rightButtonBackgroundColor='gray' 
                    leftButtonBackgroundColor='gray'/>
                    </View>
                    <View>
                    <Texto style ={{
                        paddingTop: 40,
                        maxWidth: "100%",
                        textAlign:'center',
                        maxHeight:700,
                        fontSize:24,        
                    }}
                    >Receita para {quantidade} pães de {peso} gramas cada{"\n\n"}Peso total: {quantidade * peso}g</Texto>
                    </View>
                </View>
                
                
                
            </View>
        
    </View>
  )
}

export default FormulasReceitas

const estilos = StyleSheet.create({
    subcontainer: {
      
       
    },
    formula: {
        position: 'relative',
        margin: 10,
        flexDirection: 'column',
        lineHeight:24,
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
        alignSelf: 'center',
        maxHeight: 700,
      },
      input: {
        width: 50,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 10,
        textAlign: 'center',

      },
})