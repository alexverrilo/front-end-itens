import { StackActions, useLinkProps } from '@react-navigation/native';
import { NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StackParams } from '../../App';

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 32,
		backgroundColor: '#ff0',
	},

	mensagemErro: {
		backgroundColor: '#990',
		color: '#330',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 16,
	},

	mensagemSucesso: {
		backgroundColor: '#ff9',
		color: '#990',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 16,
	},

	input: {
		padding:20,
		fontSize: 24,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#cc0',
		borderRadius: 10,
		margin: 10,
	},

	InputBox:{
		padding:16,
	},
	botaoEntrar: {
		marginVertical: 16,
		backgroundColor: '#000',
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
	},

	botaoEntrarTexto: {
		color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
	},

	linkNovoUsuario: {
		padding: 16,
		alignItems: 'center',
	},
})

type Props = NativeStackScreenProps<StackParams,'Login'>;

const LoginScreen: React.FC<Props> = (props) => {

	const [mostraSucesso, setMostraSucesso] = useState(false)
	const [mostraErro, setMostraErro] = useState(false)

	const [nomeUsuario, setNomeUsuario] = useState('')
	const [senha, setSenha] = useState('')

	const botaoEntrarPressionado = () => {
		const loginCorreto = (nomeUsuario === 'adm') && (senha === '123')

		setMostraSucesso(loginCorreto)
		setMostraErro(!loginCorreto)
	
		if (loginCorreto) {
			props.navigation.dispatch(StackActions.replace('Main'));
		}
	}

	return (
		<View style={styles.container}>

			{
				mostraSucesso &&
				<Text style={styles.mensagemSucesso}>SUCESSO: Bem-vindo!</Text>
			}

			{
				mostraErro &&
				<Text style={styles.mensagemErro}>
					ERRO: Login incorreto.
				</Text>
			}
			<View style={styles.InputBox}>
				<TextInput
					style={styles.input}
					placeholder='Nome de usuário!'
					onChangeText={setNomeUsuario}
				/>
				<TextInput
					style={styles.input}
					placeholder='Senha'
					onChangeText={setSenha}
				/>
			</View>
			<TouchableOpacity
				style={styles.botaoEntrar}
				onPress={botaoEntrarPressionado}>
				<Text style={styles.botaoEntrarTexto}>Entrar</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.linkNovoUsuario}
				onPress={() => {}}>
				<Text>Cadastre-se!</Text>
			</TouchableOpacity>
			
		</View>
	)
}

export default LoginScreen