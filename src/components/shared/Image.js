import React from 'react';
import styled from 'styled-components';
import {compose, pure} from 'recompose';

const enhancedInput = compose(
  pure
)(props => {
  return (
      <img {...props} />
  );
});

export const Image = styled(enhancedInput)`
	box-sizing: border-box;
	border: none;
`;