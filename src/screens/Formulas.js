import React, { useState } from 'react';
import { StyleSheet, Image, Text, Dimensions, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import Texto from '../components/Texto';

import topo from '../../assets/img/breads.jpg';

const width = Dimensions.get('screen').width;

export default function Lista() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Boulanger APP</Text>
        <Text style={estilos.tituloCorpo}>Selecione a massa a ser produzida abaixo</Text>
    </>
}

export function MyDropdown() {
    
    const [selectedItem, setSelectedItem] = useState(''); // Valor inicial
  
    return <>
      <View style = {estilos.picker}>
        <Picker
            itemStyle={estilos.itensCorpo}           
            mode="dropdown"
            selectedValue={selectedItem}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedItem(itemValue)
        }>
        
            <Picker.Item label="Selecione a massa aqui" value="" />
            <Picker.Item label="Pão de Xis" value="paodexis" />
            <Picker.Item label="Pão Integral" value="integral" />
            <Picker.Item label="Pão Multigrãos" value="multigraos" />
        </Picker>
      </View>  
        
      <Form massaSelecionada = {selectedItem} />

    </>

}

export function Form(props) {

    const massaAtual = props.massaSelecionada;
    
    let valorBaseFarinhaBranca = 1;
    let valorBaseFarinhaIntegral = 1;
    let valorBaseAcucarMascavo = 1;
    let valorBaseSal = 1;
    let valorBaseAgua = 1;
    let valorBaseFermento = 1;
    let valorBaseAzeite = 1;
    let valorBaseMelhorador = 1;

    let [farinhaBranca, setFarinhaBranca] = useState(valorBaseFarinhaBranca);
    let [farinhaIntegral, setFarinhaIntegral] = useState(valorBaseFarinhaIntegral);
    let [acucarMascavo, setAcucarMascavo] = useState(valorBaseAcucarMascavo);
    let [sal, setSal] = useState(valorBaseSal);
    let [agua, setAgua] = useState(valorBaseAgua); 
    let [fermento, setFermento] = useState(valorBaseFermento);
    let [azeite, setAzeite] = useState(valorBaseAzeite);
    let [melhorador, setMelhorador] = useState(valorBaseMelhorador);

    if (massaAtual == "integral") {
        valorBaseFarinhaBranca = 0.391;
        valorBaseFarinhaIntegral = 0.168;
        valorBaseAcucarMascavo = 0.084;
        valorBaseSal = 0.01;
        valorBaseAgua = 0.308;
        valorBaseFermento = 0.006;
        valorBaseAzeite = 0.028;
        valorBaseMelhorador = 0.006;
    } 

    const [quantidade, setQuantidade] = useState('1');
    const [peso, setPeso] = useState('1');

    const handleSubmit = () => {
        // Lógica para lidar com os valores submetidos
        console.log('Quantidade:', quantidade);
        console.log('Peso:', peso);
    };

    const handleFormSubmit = () => {
        const farinhaBrancaAtualizada = farinhaBranca * quantidade * peso;
        const farinhaIntegralAtualizada = farinhaIntegral * quantidade * peso;
        const acucarMascavoAtualizado = acucarMascavo * quantidade * peso;
        const salAtualizado = sal * quantidade * peso;
        const aguaAtualizada = agua * quantidade * peso;
        const fermentoAtualizado = fermento * quantidade * peso;
        const azeiteAtualizado = azeite * quantidade * peso;
        const melhoradorAtualizado = melhorador * quantidade * peso;



        setFarinhaBranca(farinhaBrancaAtualizada);
        setFarinhaIntegral(farinhaIntegralAtualizada);
        setAcucarMascavo(acucarMascavoAtualizado);
        setSal(salAtualizado);
        setAgua(aguaAtualizada);
        setFermento(fermentoAtualizado);
        setAzeite(azeiteAtualizado);
        setMelhorador(melhoradorAtualizado);
    }




  const resetValores = () => {
    setFarinhaBranca(valorBaseFarinhaBranca);
    setFarinhaIntegral(valorBaseFarinhaIntegral);
    setAcucarMascavo(valorBaseAcucarMascavo);
    setSal(valorBaseSal);
    setAgua(valorBaseAgua);
    setFermento(valorBaseFermento);
    setAzeite(valorBaseAzeite);
    setMelhorador(valorBaseMelhorador);

    setQuantidade('1');
    setPeso('1');    
}

  return (  
    <View style={estilos.container}>
        <View style={estilos.subcontainer}>
            <Texto style={estilos.label}>Quantidade: </Texto>
            <TextInput
                style={estilos.input}
                value={quantidade}
                onChangeText={text => setQuantidade(text)}
            />
            <Texto style={estilos.label}> Peso: </Texto>
            <TextInput
                style={estilos.input}
                value={peso}
                onChangeText={text => setPeso(text)}
            />
            </View>
            <View style={estilos.botoes}>  
                <Button title="Submit" onPress={handleFormSubmit} />
                <Button title="Clear" onPress={resetValores} />
            </View> 
      {/* Exibir valores atualizados */}
        <View style={estilos.formula}>
            <Texto>Farinha branca: {farinhaBranca}</Texto>
            <Texto>Farinha integral: {farinhaIntegral}</Texto>
            <Texto>Sal: {sal}</Texto>
            <Texto>Água: {agua}</Texto>
            <Texto>Fermento: {fermento}</Texto>
            <Texto>Azeite: {azeite}</Texto>
            <Texto>Melhorador: {melhorador}</Texto>
        </View>
    </View>  
  );
}


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
    fonteFoto: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 50,
        textAlign: "right",
        fontSize: 8,
        color: "white", 
        transform: [
            { rotate: '-90deg' },           
        ]    
    },
    topo: {
        position: 'relative',
        width: "100%",
        height: 180,
    },
    titulo: {
        width: "100%",
        position: "relative",
        textAlign: "center",
        fontSize: 32,
        lineHeight: 18,
        fontWeight: "bold",
        marginTop: 20,
        padding: 20,
    },
    tituloCorpo: {
        width: "100%",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 20,
        fontFamily: "MontserratBold",
        padding: 10,
    },
    itensCorpo: {
        textAlign: "left",
        left: 10,
        fontSize: 16,
        lineHeight: 20,
        color: "black",
        fontWeight: "bold",
        flexDirection: "row",
        fontFamily: "MontserratRegular",
    },
    corpo: {
        padding: 14,
    },

    fotos: {
        width: 40,
        height: 40,
    },
    picker: {
        alignSelf: "center",
        width: "80%",
        borderColor:"black",
        borderWidth: 2,
        borderRadius: 50,
    },
    pickerItem: {
        width: "100%",
    }
});