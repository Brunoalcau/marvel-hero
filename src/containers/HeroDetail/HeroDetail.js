import React from 'react';
import {object, func} from 'prop-types';
import {isEmpty} from 'lodash';
import {
  compose,
  setPropTypes,
  withHandlers,
  lifecycle,
  withProps
} from 'recompose';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {map} from 'lodash';

import {
	getCharacter,
	getComics
} from '../../actions';
import {
	Text,
	Paginate,
} from '../../components/shared';
import {Comics} from '../../components/HeroDetail';
import {LIMIT} from '../../config';

const enhance = compose(
	connect(({chatacters, comics}) => 
		({
			chatacters,
			comics
		}),
		{
			getCharacter, 
			getComics
		}
	),
	setPropTypes({
		getCharacter: func.isRequired,
		getComics: func.isRequired,
		chatacters: object.isRequired,
		comics: object.isRequired,
		params: object
	}),
	withProps(({params}) => ({
		id: params.id
	})),
	withHandlers({
		setPageChange: ({getComics, id, login}) => async (data) => {
			const selected = data.selected;
			const offset = Math.ceil(selected * LIMIT);
			await getComics(id, offset);
		},
	}),
	lifecycle({
		async componentWillMount() {
			await this.props.getCharacter(this.props.id);
			await this.props.getComics(this.props.id);
		}
	})
);
export const HeroDetail = enhance(({chatacters, comics, setPageChange}) => {
	return (
		<Wrapper>
			{isEmpty(chatacters.data.object) && <div></div>}
			{
				!isEmpty(chatacters.data.object) && 
				<Comics
					src={`${chatacters.data.object.thumbnail.path}/standard_fantastic.${chatacters.data.object.thumbnail.extension}`}
					title={chatacters.data.object.name}
					description={chatacters.data.object.description}
				/>
			}
			<WrapperFascicles>
				<SeparatorText>
					<Text align="center" weight={900} size={18}>Fascículos</Text>	
				</SeparatorText>
				<Separator />
				<Cards>
					{map(comics.data.allObject, item => (
							<Comics 
								src={`${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`} 
								title={item.title} 
								description={item.description} key={item.id} 
							/>
						)
					)}
				</Cards>
				<Paginate 
					setPageChange={setPageChange}
					pageCount={comics.pageCount}
				/>
			</WrapperFascicles>
		</Wrapper>
	);
});


const Wrapper = styled.div`
	padding-left: 20%;
	padding-right: 20%;
	padding-top: 20px;
`;

const Separator = styled.hr`
	display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid ${props => props.theme.border};
    padding: 0;
    margin: 0 1em 2em 1em;
`;


const WrapperFascicles = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 0 auto;
`;
const Cards = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const SeparatorText = styled.div`
	text-align: center;
`