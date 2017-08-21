import React, { Component } from 'react';
import Todo from './Todo';
import Header from './Header';

class List extends Component {
	state = {
		searchTerm: ''
	};

	onSearchChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="">
				<Header
					title="List of TODOs"
					search="true"
					searchTerm={this.state.searchTerm}
					onSearchChange={this.onSearchChange}
				/>

				{this.props.todos
					.filter(todo => `${todo.what}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) > -1)
					.map(todo => <Todo key={todo.id} {...todo} preview="true" />)}
			</div>
		);
	}
}

export default List;
