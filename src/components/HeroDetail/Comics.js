import React from 'react';
import {string} from 'prop-types';
import {
  compose,
  setPropTypes
} from 'recompose';
import styled from 'styled-components';

import {
	Text,
	Image
} from '../../components/shared';



const enhance = compose(
	setPropTypes({
		src: string.isRequired,
		title: string.isRequired,
		description: string

	})
);
export const Comics = enhance(({src, title, description}) => {
	return (
		<Card>
			<InBox>
				<ImageCard src={src} />
			</InBox>
			<ContentBox>
				<Title weight={900} size={20}>{title}</Title>
				<Description>{description}</Description>	
			</ContentBox>
		</Card>
	);
});


const Title = Text.extend`
	line-height: 1;
	margin: 0 0 .5em;
	font-size: 18px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2em);
  background: #fbfbfb;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2em;
  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid #d2d2d2;
  border-left: 1px solid #dadada;
  margin: 0 1em 2em 1em;
`;

const InBox = styled.div`
	display: flex;
    align-items: center;
    background: #f1f1f1;
    padding: 2em;
    text-align: center;
    justify-content :center;
    width: 150px;
    position: absolute;    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-right: 1px solid ${props => props.theme.border};
`;


const ImageCard = Image.extend`
	width: 100%;
	max-width: 200px;
	margin: 0 auto;

`;

const ContentBox = styled.div`
    padding: 2em 2em 3em;  
    flex: 1;
    padding-left: calc(200px + 2em);
 `;


 const Description = styled.div`
  line-height: 1.5;
  padding: 0;
  margin: 0 0 1em;
  clear: both;
  color: ${props => props.theme.tertiary};
  font-size: 16px;
 `;


				// <ImageCard src={} />	