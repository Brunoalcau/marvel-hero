import React from 'react';
import {object, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  withHandlers,
  lifecycle
} from 'recompose';
import {map} from 'lodash';
import {connect} from 'react-redux';
// import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

import {
	Paginate
} from '../../components/shared';
import {HeroCards} from '../../components/Heros';
import {getCharacters, getKeys} from '../../actions';
import {LIMIT} from '../../config';

const enhance = compose(
	connect(({chatacters, login}) => ({chatacters, login}),{getCharacters, getKeys}),
	withHandlers({
		handlerPagination: ({router, getCharacters, login}) => (data) => {
			const selected = data.selected;
			const offset = Math.ceil(selected * LIMIT);
			getCharacters(offset);
		},
		onRowClick: ({router}) => (data) => () => {
			router.push({
				pathname: `detail/${data.id}/`
			});
		}
	}),
	setPropTypes({
    	getCharacters: func.isRequired,
    	getKeys: func.isRequired,
    	login: object.isRequired,
    	chatacters: object.isRequired
  	}),
	lifecycle({
		async componentWillMount() {
			this.props.getKeys();
			await this.props.getCharacters();
		}
	})
);
export const Heros = enhance(({handlerPagination, onRowClick, chatacters}) => {
	return (
		<div>
			<Centered>
				<Cards>
					{map(
						chatacters.data.allObject, 
						item => (
							<HeroCards
								data={item}
								onCardClick={onRowClick}
							/>
						)
					)}
				</Cards>					
			</Centered>
			<Paginate 
				setPageChange={handlerPagination}
				pageCount={chatacters.pageCount}
			/>
		</div>
	);
});

const Centered = styled.div`
	margin: 0 auto;
    padding-left: 20%;
	padding-right: 20%;
`;

const Cards = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: inherit;
`;