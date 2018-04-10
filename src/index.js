import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {store} from './store/configStore';
import {theme, resetStyle} from './config'
import registerServiceWorker from './registerServiceWorker';

import {Login} from './containers/Login';
import {Heros} from './containers/Heros';
import {HeroDetail} from './containers/HeroDetail';

const history = syncHistoryWithStore(browserHistory, store);

resetStyle();
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<Route path="/" component={Login}/>
				<Route path="/heros" component={Heros}/>
				<Route path="/detail/:id" component={HeroDetail}/>
			</Router>
		</ThemeProvider>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
