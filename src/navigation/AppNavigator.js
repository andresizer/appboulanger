import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import TelaListaReceitas from '../screens/TelaListaReceitas';
import FormulasReceitas from '../components/FormulasReceitas';
import FormularioReport from '../screens/FormularioReport';
import FaleConosco from '../screens/FaleConosco';
import ComoUtilizar from '../screens/ComoUtilizar'
import FormulaNome from '../components/FormulaNome';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Welcome" component={WelcomeScreen} />
            <Stack.Screen name = "TelaListaReceitas" component={TelaListaReceitas} />
            <Stack.Screen name = "FormulasReceitas" component={FormulasReceitas} />
            <Stack.Screen name = "FormularioReport" component={FormularioReport} />
            <Stack.Screen name = "FaleConosco" component={FaleConosco} />
            <Stack.Screen name = "ComoUtilizar" component={ComoUtilizar} />
            <Stack.Screen name = "FormulaNome" component={FormulaNome} />
        </Stack.Navigator>
   </NavigationContainer>
   
  )
}

export default AppNavigator

const styles = StyleSheet.create({})