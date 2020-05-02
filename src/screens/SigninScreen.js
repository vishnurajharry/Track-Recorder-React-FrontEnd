import React , {useState ,useContext} from 'react';
import {Text , Button,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/FormComponent';

const SigninScreen = () => {

	const {state,Signin } = useContext(AuthContext);

	return <AuthForm 
				errorMessage = {state.errorMessage}
				onSubmit = {(email,password)=> Signin(email,password)}
				toggle = 'signup'
				header = 'Sign In'
				navParam = 'signup'
		   />
};

SigninScreen.navigationOptions = () => {
	return {
		header:null
	}
}


export default SigninScreen;