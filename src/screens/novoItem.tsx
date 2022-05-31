import { StackActions } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import React, { useState } from "react";
import Item from "../models/item";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import item from "./item";
import axios from "axios";

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
        },
    Text: {
        fontWeight:'bold',
        fontSize: 18,
    },
    })

type Props = NativeStackScreenProps<StackParams, 'NovoItem'>;

const novoItemScreen: React.FC<Props> = (props) => {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const botaoSalvarPressionado = () => {
        axios.post('http://localhost:4000/api/itens', {nome, descricao})
        .then(() => {
            props.navigation.pop(1);
        })
        .catch((error) => {
          alert(error.message)         
        });
    };

return(
    <View style={styles.container}>

            <Text style={styles.Text}>Adicionar Novo Item</Text>

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

            <TouchableOpacity style={styles.Botao} onPress={botaoSalvarPressionado}>

                <Text style={styles.nomeBotao}>Salvar</Text>

            </TouchableOpacity>
        </View>
);
}
export default novoItemScreen