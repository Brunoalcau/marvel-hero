import React from 'react';
import {object, func} from 'prop-types';

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
		data: object,
		onCardClick: func
	})
);
export const HeroCards = enhance(({data, onCardClick}) => {
	return (
		<Card onClick={onCardClick(data)}>
			<Figure>
				<ImageHero src={`${data.thumbnail.path}/landscape_incredible.${data.thumbnail.extension}`} />
			</Figure>
			<Content>
				<Title styled>{data.name}</Title>
				<Description>{data.description}</Description>
			</Content>
		</Card>
	);
});


const Card = styled.div`
	margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background: white;
	color: black;
	text-decoration: none;
	&: hover {
		box-shadow: 3px 3px 8px hsl(0, 0%, 70%);
	}
	margin-top: inherit;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2em;
    display: flex;
     margin-top: inherit;
    flex: 0 1 calc(32% - 0.5em);
`;

const Figure = styled.figure``;

const Content = styled.div`
	padding: 1.4em;
`;


const ImageHero = Image.extend`
	width: 100%;
  	height: auto;
`;

const Title = Text.extend`
	line-height: 1;
	margin: 0 0 .5em;
	font-size: 18px;
`;

const Description = styled.div`
  line-height: 1.5;
  padding: 0;
  margin: 0 0 1em;
  clear: both;
  color: ${props => props.theme.tertiary};
  font-size: 16px;
 `;