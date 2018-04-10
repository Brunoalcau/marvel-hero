import React from 'react';
import styled from 'styled-components';
import {compose, pure} from 'recompose';

const enhancedInput = compose(
  pure
)(props => {
  return (
      <input {...props} required/>
  );
});

export const InputText = styled(enhancedInput).attrs({
	size: props => props.size || '15'	
})`
	font-size: ${props => props.size}px;
	padding: 5px;
	width: 96%;
	margin: 2%;
	box-sizing: border-box;
	border: none;
    border:solid 1px #ccc;
	border-radius: ${props => props.theme.borderRadius}px;
`;