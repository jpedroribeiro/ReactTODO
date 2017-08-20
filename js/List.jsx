import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
	state = {
		searchTerm: '' // TODO this search
	};

	render() {
		return (
			<div className="">
				<h1>List of TODOs</h1>
				<header>
					<input type="text" placeholder="Filter TODOs" />
				</header>

				{this.props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
			</div>
		);
	}
}

export default List;
