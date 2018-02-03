import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import GoogleSignIn from 'react-native-google-sign-in';


import firebase from './firebase';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

const RouterComponent = () =>
	(
		<Router>
			<Scene>
				<Scene key='auth' tabs>
					<Scene key='login' component={LoginForm} title='Please Login' hideTabBar />
				</Scene>
				<Scene key='main' tabs>
					<Scene
						key='welcome'
						title='Log In Successful'
						component={Welcome}
						hideTabBar
						onRight={() => 
							
							
							firebase.auth().signOut().then(() => {
							GoogleSignIn.signOut();
							Actions.auth();
						})}
						rightTitle='Log Out'
					/>
				</Scene>
			</Scene>
		</Router>
	);


export default RouterComponent;
