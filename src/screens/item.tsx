import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { StackParams } from "../../App"

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0",
        flexGrow:1,
        
    },
    nome: {
        fontWeight: "bold",
        color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
    },
    description: {
        fontWeight: "bold",
    },
    Botao: {
        marginVertical: 16,
		backgroundColor: '#000',
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
    },
    product: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

type Props = NativeStackScreenProps<StackParams, 'Item'>; // Comando para navegar entre as telas.

const ItemScreen: React.FC <Props>= (props) => {
    
    const item = props.route.params.item; // Pega o item.

    const itemPressionado = () => { 
        props.navigation.navigate('EditarItem',{item}) // Navegar para proxima tela.
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>
            </View>
                <View>
            <TouchableOpacity onPress={itemPressionado} style={styles.Botao}>
                <Text style={styles.nome}>Editar</Text>
            </TouchableOpacity>
            </View> 
        </View>
        
    );

}



export default ItemScreen

