import { Dimensions, StyleSheet,Pressable, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'


import Texto from './Texto';



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const FaleConosco = () => {

    const navigation = useNavigation();

  return (

    
    <SafeAreaView style={{
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "flex-start",
        flex: 1,
    }}>
       
       <SafeAreaView>
     <Pressable style={{ alignItems:"center", gap:10, flexDirection:'row', right: width - 260, paddingBottom: 40 }} onPress={() => navigation.goBack()}>
         <FontAwesome name={"arrow-circle-left"} size={28} color="black" />
         <Texto style={{ maxHeight: 700 }}>Voltar</Texto>
     </Pressable>
 </SafeAreaView>

      <Texto style={{
        fontSize: 38,
        // height: 100,
        // backgroundColor: 'red',
        maxHeight: 900,
        textTransform: "uppercase",
        letterSpacing: 6,
        textShadowColor: "red",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 5,
        flex: 1
      }}> 
        em breve! </Texto>

    </SafeAreaView>
  )};

export default FaleConosco

const styles = StyleSheet.create({})