import { Actions } from 'react-native-router-flux';
import GoogleSignIn from 'react-native-google-sign-in';

import firebase from '../firebase';
import {
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL
} from './types';
import { CLIENT_ID } from './EnvironmentVariable';

const signInWithGoogle = (googleIdentity) => {
	const credential = firebase.auth.GoogleAuthProvider
		.credential(googleIdentity.idToken, googleIdentity.accessToken);
	return firebase.auth().signInWithCredential(credential);
};


export const googleLogin = () => (dispatch) => {
	GoogleSignIn.configure({
		clientId: CLIENT_ID
	})
		.then(GoogleSignIn.signInPromise)
		.then(signInWithGoogle)
		.then((firebaseIdentity) => {
			console.info(firebaseIdentity);
			loginUserSuccess(dispatch, firebaseIdentity);
		})
		.catch((err) => {
			console.error('WRONG SIGNIN', err);
			loginUserFail(dispatch);
		});
};


const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
	Actions.main();
};
