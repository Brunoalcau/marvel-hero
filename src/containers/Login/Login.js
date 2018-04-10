import React from 'react';
import {object, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  withHandlers,
  lifecycle
} from 'recompose';
import {connect} from 'react-redux';
//

import {
	LoginForm
} from '../../components/Login';
import {getKeys} from '../../actions';

const enhance = compose(
	connect(({login}) => ({login}),{getKeys}),
	setPropTypes({
		login: object,
		getKeys: func.isRequired
	}),
	withHandlers({
		handlerSubmit: ({router}) => () => {
			
		}
	}),
	lifecycle({
		async componentWillMount() {
			this.props.getKeys();
			if (this.props.login.privateKey && this.props.login.publicKey) {
				this.props.router.push('/heros');
			}
		}
	})
);
export const Login = enhance(({router}) => {
	return (
		<LoginForm router={router}/>
	);
});