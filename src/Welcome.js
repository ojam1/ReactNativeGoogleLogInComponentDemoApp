import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


class Welcome extends Component {
	render() {
		const { user } = this.props;
		const userName = _.get(user, '_user.displayName');


		return (
			<View style={styles.centering}>
				<Text style={styles.textStyle}>
					Welcome {userName}
				</Text>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 40,
		
		color: 'black'
	},

	centering: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};

const mapStateToProps = state => {
	const {
		user
} = state.auth;

	return { user };
};

export default connect(mapStateToProps)(Welcome);
