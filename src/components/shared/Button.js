import React from 'react';
import styled, {css} from 'styled-components';
import {omit} from 'lodash';
import {compose, pure} from 'recompose';

const enhancedButton = compose(
  pure
)(props => {
  return (
      <button type="button" {...omit(props,['success', 'danger', 'warning', 'secondary', 'info'])}>
        {props.children}
      </button>
  );
});

export const Button = styled(enhancedButton)`
  background: ${props => props.background || 'rgba(0,0,0,0)'};
  align-items: center;
  border: 0;
  justify-content: center;
  flex-direction: row; 
  box-sizing: border-box;
  padding: 10px;
  width: 96%;
  margin: 2%;
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.7;
  }

  border-radius: ${props => props.theme.borderRadius}px;

  ${props =>
    props.success &&
    css`
    background: ${props => props.theme.success};
  `}

  ${props =>
    props.danger &&
    css`
    background: ${props => props.theme.danger};
  `}

  ${props =>
    props.warning &&
    css`
    background: ${props => props.theme.warning};
  `}
  ${props =>
    props.info &&
    css`
    background: ${props => props.theme.info};
  `}
`;