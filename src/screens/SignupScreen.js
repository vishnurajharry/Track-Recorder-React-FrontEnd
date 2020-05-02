import React , {useState ,useContext} from 'react';
import {StyleSheet,View , TouchableOpacity} from 'react-native'
import {Text , Button,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/FormComponent';

const SignupScreen = ({ navigation }) => {

	const {state,Signup } = useContext(AuthContext);

	return 	<AuthForm 
					errorMessage = {state.errorMessage}
					onSubmit = {(email,password)=> Signup(email,password)}
					toggle = 'signin'
					header = 'Sign Up'
					navParam = 'signin'
		   	/>

};


SignupScreen.navigationOptions = () => {
	return {
		header:null
	}
}



export default SignupScreen;