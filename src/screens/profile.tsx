import React from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import imagem from '../../assets/foto.jpg';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mensagem: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
});

const ProfileScreen: React.FC = () => {
	const botaoPressionado = () => {
    Alert.alert('Botão pressionado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>Alô, Mundo!</Text>
      <Text>Outro texto.</Text>
      <Image style={styles.imagem} source={imagem}/>
      <Button title='Teste' onPress={botaoPressionado} />
    </View>
  );
}

export default ProfileScreen