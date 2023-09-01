import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {

const [fonteCarregada] = useFonts ({
  "MontserratPadrao": Montserrat_400Regular,
  "MontserratNegrito": Montserrat_700Bold,
  "MontserratBlack": Montserrat_900Black,
});

if(!fonteCarregada) {
  return  
  <View>
    <Text>Open up App.js to start working on your app!</Text>
    
  </View>
}

  return (
    
    <AppNavigator />

   
  );
};


