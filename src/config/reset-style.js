import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

export const resetStyle = () => injectGlobal`
	${reset}

	.pagination {
		display: inline-block;
	    padding-left: 15px;
	    padding-right: 15px;
	}
	li {
		display: inline-block;
		color: black;
	    float: left;
	    padding: 8px 16px;
	    text-decoration: none;
	    cursor: pointer;
	}
	.break a {
	    cursor: default;
	}
	.selected {
	    border: none;
		border-radius: 5px;
		background-color: #1C2745;
    	color: white;
	}
`;