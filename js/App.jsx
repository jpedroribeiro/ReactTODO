import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List';
import Todo from './Todo';
import preload from '../data.json';

const FourOhFour = () => <h1>404!</h1>;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="">
					<Switch>
						<Route exact path="/" component={props => <List todos={preload.todos} />} />
						<Route
							path="/todo/:id"
							component={props => {
								const thisTodo = preload.todos.find(todo => {
									return todo.id == props.match.params.id;
								});
								return <Todo {...thisTodo} />;
							}}
						/>
						<Route component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
