import { StackActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, { useState } from "react";
import { View, Text,TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { StackParams } from "../../App";
import Item from "../models/item";

const styles = StyleSheet.create({

container:{
    flexGrow:1,
    alignItems: 'center',
},
nome:{
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    width: 280,
},
descricao:{
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    height: 80,
    width: 280,
    
},

nomeBotao: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    },

Botao: {
    height: 56,
    width: 100,
	backgroundColor: '#000',
	padding: 16,
	borderRadius: 8,
	alignItems: 'center',
    margin:15,
    },
Botoes: {
    flexDirection:'row',
},
})


type Props = NativeStackScreenProps<StackParams, 'EditarItem'>; // Comando para navegar entre as telas.



const editarItemScreen: React.FC<Props> = (props) => {

    const item = props.route.params.item;

    const [nome, setNome] = useState(item.nome); // State para pegar o nome do item
    const [descricao, setDescricao] = useState(item.descricao); // State para pegar a descrição do item

    const botaoExcluirPressionado = () => {
        axios.delete(`http://localhost:4000/api/itens/${item.id}`) // deleta o item que está aberto no momento que pressiona o botãoExcluir.
        .then(() => {
            props.navigation.pop(1); // remove a ultima tela
            props.navigation.pop(1); // remove a ultima tela
        })
        .catch((error) => {
            alert(error.message)       
          });

    }

    const botaoSalvarPressionado = () => {  // constante do botão salvar
        const alterarItem: Item = {
            nome: nome,
            descricao: descricao,
        };

        axios.put(`http://localhost:4000/api/itens/${item.id}`,alterarItem) // conexão com o backend para alterar o item.
        .then(() => {
            props.navigation.pop(1);  // remove a ultima tela
            props.navigation.dispatch(StackActions.replace('Item',{item:alterarItem})); //tras a ultima tela atualizada.
        })
    };

    return (
        <View style={styles.container}>

            <TextInput 
            style={styles.nome} 
            value={nome} 
            onChangeText={setNome}
            />

            <TextInput 
            style={styles.descricao}
             multiline={true} value={descricao} 
             onChangeText={setDescricao}
             />
            <View style={styles.Botoes}>
                <TouchableOpacity style={styles.Botao} onPress={botaoSalvarPressionado}> 

                    <Text style={styles.nomeBotao}>Salvar</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.Botao} onPress={botaoExcluirPressionado}>

                    <Text style={styles.nomeBotao}>Excluir</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};
export default editarItemScreen
