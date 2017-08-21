import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List';
import Todo from './Todo';
import Add from './Add';
import preload from '../data.json';

// JSON 2 Local Storage
const sendToStorage = content => {
	localStorage.setItem('todos', JSON.stringify(content));
};

const getFromStorage = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

sendToStorage(preload.todos);
// end

const FourOhFour = () => <h1>404!</h1>;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="">
					<Switch>
						<Route exact path="/" component={props => <List todos={getFromStorage()} />} />
						<Route
							path="/todo/:id"
							component={props => {
								const thisTodo = getFromStorage().find(todo => {
									return todo.id == props.match.params.id;
								});
								return <Todo {...thisTodo} />;
							}}
						/>
						<Route path="/add" component={props => <Add save={sendToStorage} todos={getFromStorage()} />} />
						<Route component={FourOhFour} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
