import React , {useState ,useContext} from 'react';
import {StyleSheet,View , TouchableOpacity} from 'react-native'
import {Text , Button,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { navigate } from '../navigationRef';

const AuthForm = ({errorMessage,onSubmit ,toggle , header , navParam}) => {
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	return(
		<View style={styles.container}>
			<Text h3 style = {{ marginLeft: 15 ,marginBottom:60,alignSelf:'center' }}> {header}</Text>
			<Input 
				leftIcon={{ type: 'Feather', name: 'mail' }} 
				style = {{ margin: 15 }} 
				label ="Email"
				onChangeText = {newEmail=> setEmail(newEmail)}
				autoCapitalize = 'none' 
				autoCorrect = {false}
			/>
			<Input 
				leftIcon={{ type: 'Feather', name: 'lock' }} 
				style = {{ margin: 15 }} 
				label ="Password"
				onChangeText = {setPassword}
				autoCapitalize = 'none' 
				autoCorrect = {false}
				secureTextEntry
			 />
			 {errorMessage?<Text style = {styles.errorStyle}>{errorMessage}</Text>:null}
			<Button title = {header} style = {styles.buttonStyle} onPress = {()=> onSubmit( email, password )} />

			<TouchableOpacity onPress = {()=> navigate(`${navParam}`)}>
					<Text style= {styles.link}>Already have an account ? {toggle} instead</Text>
				</TouchableOpacity>

		</View>

	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		marginBottom : 200,
		marginTop:100
		
		
	},

	link: {
		marginTop:15,
		marginLeft: 15,
		fontSize: 16,
		color: 'blue'
	},

	errorStyle: {
		fontSize:16,
		color: 'red',
		marginLeft:15,
		marginBottom:15
	},

});

export default AuthForm;