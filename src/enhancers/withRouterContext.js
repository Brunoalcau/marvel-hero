import {withContext} from 'recompose';
import {object} from 'prop-types';

export const withRouterContext = withContext(
  {
    router: object.isRequired
  },
  ({router}) => ({router})
);
