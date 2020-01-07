import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainHeader from './MainHeader';
import CategoryHeader from './CateogoryHeader';
import categories from '../../shared/categories';

class RootHeader extends Component {
	render() {
		return (
			<div>
				<Router>
					<MainHeader  categories={categories} />
					<Route path="/" exact>
					<CategoryHeader categories={categories} />
					</Route>
				</Router>
			</div>
		);
	}
}

export default RootHeader;
