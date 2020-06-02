import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[texto,setTexto] = useState("Números Aleatórios");
  const[numero, setNumero] = useState(Math.ceil(Math.random() * 60));
  const[contador, setContador] = useState(0);

  var numerosAleatorios = [];
   
  const randomNumber = () =>{
    
    setNumero (Math.ceil(Math.random() * 60));

    for(let i = 0; i<= numerosAleatorios.length;i++){
      while(numero == numerosAleatorios[i]){
        setNumero (Math.ceil(Math.random() * 60));
      }
    }
    setContador(contador+1);
    if(contador<6){
      setTexto(""+numero);
      numerosAleatorios.push(numero);
    }
    else{
      setTexto("Numeros ja sorteados");
    }
  }
  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <View style={styles.botao}>
        <Button
          title="Rodar numero aleatorio"
          onPress = {randomNumber}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    marginTop:4
  }
});
