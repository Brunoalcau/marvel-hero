import React from 'react';
import {number, func} from 'prop-types';
import {
  compose,
  setPropTypes,
  withHandlers
} from 'recompose';

import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const enhance = compose(
  withHandlers({
    handlerSubmit: ({router, getCharacters}) => (data) => {
      const selected = data.selected;
      const offset = Math.ceil(selected * 20);
      getCharacters(offset);
    }
  }),
  setPropTypes({
      pageCount: number.isRequired,
      setPageChange: func
  })
);
export const Paginate = enhance(({setPageChange, pageCount}) => {
  return (
    <Wrapper>
      <ReactPaginate 
        previousLabel={'Anterior'}
        nextLabel={'Próximo'}
        onPageChange={setPageChange}
        containerClassName={'pagination'}
        pageCount={pageCount}
      />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  text-align: center;
`