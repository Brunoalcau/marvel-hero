import styled, {css} from 'styled-components';
export const Text = styled.label.attrs({
  color: props => props.color || props.theme.text,
  size: props => props.size || '15',
  weight: props => props.weight || 'normal',
  align: props => props.align || 'left',
  decoration: props => props.decoration || 'none'
})`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  margin: 0;
  padding: 0;
  text-decoration: ${props => props.decoration};
  
  ${props =>
    props.secondary &&
    css`
    color: ${props => props.theme.textSecondary};
  `}

  ${props =>
    props.inverted &&
    css`
    color: ${props => props.theme.textInverted};
  `}

  ${props =>
    props.danger &&
    css`
    color: ${props => props.theme.danger};
  `}

  ${props =>
    props.success &&
    css`
    color: ${props => props.theme.success};
  `}

  ${props =>
    props.warning &&
    css`
    color: ${props => props.theme.warning};
  `}

  ${props =>
    props.underline &&
    css`
    color: ${props => props.theme.textSecondary};
  `}
  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
  `}
`;
