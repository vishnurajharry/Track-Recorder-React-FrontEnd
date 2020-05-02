import { AsyncStorage } from 'react-native'
import CreateDataContext from './CreateDataContext';
import tracker from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state,action) => {
	switch (action.type) {
		case 'signup': 
			return {token : action.payload , errorMessage: ''}
		case 'signin': 
			return {token : action.payload , errorMessage: ''}
		case 'add_error': 
			return {...state, errorMessage :action.payload}
		default : 
			return state;
	}
};

const Signup = (dispatch) => {
	return async (email,password) => {

		try {
			const response = await tracker.post('/signup',{email,password})
			console.log(response.data)
			await AsyncStorage.setItem('token', response.data.token)
			dispatch({type:'signup' , payload: response.data.token})
			navigate('TrackList');
			//Normal way to do is to call a callbackfunction that is passed from the react component 
			//navigation property is not accessible here since its not a reatc component
			//Navigate to the other page
		}
		catch(err) {
			dispatch({type:'add_error',payload:"Something went wrong while Signing you Up"})
		}
		//Api to call the express server and post the request into mongo server 
		//return from server Json Web Token
	}
}

const Signin = dispatch => {
	return async (email,password) => {
		//Post request to express server with login credentials , validate the login in server
		try {
			const response = await tracker.post('/signin',{email,password})
			console.log(response.data)
			await AsyncStorage.setItem('token', response.data.token)
			dispatch({type:'signin' , payload: response.data.token})
			navigate('TrackCreate');
			//Normal way to do is to call a callbackfunction that is passed from the react component 
			//navigation property is not accessible here since its not a reatc component
			//Navigate to the other page
		}
		catch(err) {
			dispatch({type:'add_error',payload:"Something went wrong while Signing you in"})
		}
	}
}

export const {Provider, Context} = CreateDataContext(
	authReducer,
	{Signup,Signin},
	{ token:'' , errorMessage:'' }
);