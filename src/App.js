import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainHeader from './components/Header/MainHeader';
import Dashboard from './components/Dashboard';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import CategoryHeader from './components/Header/CateogoryHeader';
import categories from '../src/shared/categories';


class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<MainHeader  categories={categories} />
					<Route path="/" exact>
					<CategoryHeader categories={categories} />
						<Dashboard />
					</Route>
					<Route path="/aboutauthor" exact component={AboutAuthor} />
				</Router>
			</div>
		);
	}
}

export default App;
