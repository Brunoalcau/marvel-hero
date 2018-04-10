import React from 'react';
import {object, func} from 'prop-types';

import {
  compose,
  setPropTypes,
  withState,
  withHandlers
} from 'recompose';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {Button, InputText, Text} from '../shared';
import {withRouterContext} from '../../enhancers';
import {loginIn} from '../../actions';

// isRequired
const enhance = compose(
	connect(({login}) => ({login}), {loginIn}),
	withRouterContext,
	setPropTypes({
		login: object.isRequired,
		loginIn: func.isRequired
	}),
	withState('plublicKey', 'setPlublicKey', ''),
	withState('privateKey', 'setPrivateKey', ''),
	withHandlers({
		handleSubmit: ({router, plublicKey, privateKey, loginIn, login}) => () => {
			if (plublicKey, privateKey) {
				loginIn(plublicKey, privateKey);
				router.push('/heros');
			} else {
				alert('Preencha todos os campos');	
			}
		}
	})
);
export const LoginForm = enhance(({
	handleSubmit, 
	setPrivateKey, 
	setPlublicKey,
	plublicKey,
	privateKey
}) => {
	return (
		<Wrapper>
			<Header>
				<Text weight="900" size="20">Dados de acesso</Text>
			</Header>
			<form>
				<InputText placeholder="Public Key" value={plublicKey} onChange={e => setPlublicKey(e.target.value)} />
				<InputText placeholder="Private Key"value={privateKey} onChange={e => setPrivateKey(e.target.value)} />
			    <Button info onClick={handleSubmit}>
			    	<Text weight="600" inverted>Acessar</Text>
			    </Button>
			</form>
		</Wrapper>
	);
});

const Header = styled.div`
	text-align: center;
`;
const Wrapper = styled.div`
	padding-top: 20px;
	padding-left: 20%;
	padding-right: 20%;
`;