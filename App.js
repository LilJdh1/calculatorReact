import React, { useState } from 'react';
import { Text, TextInput, Button, View,Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const Calculadora = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    switch(operacion){
      case 'suma': 
        if (!isNaN(num1) && !isNaN(num2)) {
          setResultado(num1 + num2);
          break;
        }

      case 'resta':
        if (!isNaN(num1) && !isNaN(num2)) {
          setResultado(num1 - num2);
          break;
        }
      case 'multiplicacion':
        if (!isNaN(num1) && !isNaN(num2)) {
          setResultado(num1 * num2);
          break;
        }
      case 'division':
        if (!isNaN(num1) && !isNaN(num2)) {
          setResultado(num1 / num2);
          break;
        }
      default:{
        return 'Por favor ingrese números válidos'
      }   
    }
    
  };



  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Operaciones</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa el primer número"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa el segundo número"
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => Calculadora('suma')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17305/17305759.png' }}
            style={styles.operatorImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Calculadora('resta')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/6330/6330834.png' }}
            style={styles.operatorImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Calculadora('multiplicacion')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/12628/12628419.png' }}
            style={styles.operatorImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Calculadora('division')}>
          <Image
            source={{ uri: 'https://cdn-icons-png.freepik.com/512/9447/9447762.png' }}
            style={styles.operatorImage}
          />
        </TouchableOpacity>
      </View>
      {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  operatorImage: {
    width: 100,
    height: 100,
    marginTop: 30,
    
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:'20',
    borderRadius: 100
  }
});