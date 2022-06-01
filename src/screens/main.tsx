import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackParams } from '../../App';
import Item from '../models/item';
import item from './item';
import axios from 'axios'


type Props = NativeStackScreenProps<StackParams,'Main'>;

const styles = StyleSheet.create({
	container:{
	},
	listItem: {
		justifyContent: 'center',
		backgroundColor: '#ff0',
		padding: 20,
		marginBottom: 20,
		height: 100,
		width: 400,
		borderRadius: 15,
	},
	listItemText: {
		textAlign: 'center',
		fontSize: 24,
	},
	ViewList: {
		alignItems:'center',
		margin: 15,
	},
	ViewBotao: {
		flex: 1,
		alignItems: 'center',
	},
	Botao: {
		height: 56,
		width: 120,
		backgroundColor: '#000',
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
	},
	nomeBotao: {
		fontWeight: "bold",
		color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
	},

})

const MainScreen: React.FC<Props> = (props) => {

	const [itens, setItens] = useState<Item[]>([]);

	useFocusEffect(useCallback(()=>{
		axios.get<Item[]>('http://localhost:4000/api/itens') // Adiciona um novo item no backend
		.then((res)=>{
			setItens(res.data);
		})
		.catch((error)=>{
			console.log(error);
		})
	}, []));

	const novoItemPressionado = () => {
		props.navigation.navigate('NovoItem')
	}

	const renderFlatListItem: ListRenderItem<Item> = ({item}) => { // Constante para criar um elemento.

		const itemPressionado = () => {
			props.navigation.navigate('Item', {item: item})
		}

		return ( // elemento do renderFlatList.
			<TouchableOpacity onPress={itemPressionado} style={styles.listItem}> 
				<Text style={styles.listItemText}>{item.nome}</Text>
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
		<View style={styles.ViewList}>
			<FlatList
				renderItem={renderFlatListItem}
				data={itens}
			/>
			</View>
		<View style={styles.ViewBotao}>
			<TouchableOpacity onPress={novoItemPressionado} style={styles.Botao}>
				<Text style={styles.nomeBotao}>Adicionar</Text>
			</TouchableOpacity>
		</View>
		</View>
	)
}

export default MainScreen