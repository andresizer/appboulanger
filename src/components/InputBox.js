import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function InputBox({ navigation }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonClick = () => {
    onValueChange(inputValue);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o seu nome"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Button title="Enviar" onPress={handleButtonClick} />
    </View>
  );
}
