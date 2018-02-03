import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { googleLogin } from '../src/actions';

class LoginForm extends Component {
	onButtonPress() {
		this.props.googleLogin();
	}

	renderButton() {
		return (
			<Button
				onPress={this.onButtonPress.bind(this)}
				title="Google Sign In"
				color="#841584"
			/>
		);
	}

	render() {
		return (
			<View style={styles.centering}>
				<View>
					{this.renderButton()}
				</View>
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},

	centering: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default connect(null, { googleLogin })(LoginForm);
