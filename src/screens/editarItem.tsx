import { StackActions } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
    },
})


type Props = NativeStackScreenProps<StackParams, 'EditarItem'>;



const editarItemScreen: React.FC<Props> = (props) => {

    const item = props.route.params.item;

    const [nome, setNome] = useState(item.nome);
    const [descricao, setDescricao] = useState(item.descricao);

    const botaoSalvarPressionado = () => {
        const novoItem: Item = {
            id: item.id,
            nome: nome,
            descricao: descricao,

        };
        props.navigation.pop(1);
        props.navigation.dispatch(StackActions.replace('Item',{item:novoItem}));
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

            <TouchableOpacity style={styles.Botao} onPress={botaoSalvarPressionado}>

                <Text style={styles.nomeBotao}>Salvar</Text>

            </TouchableOpacity>
        </View>
    );
};
export default editarItemScreen
