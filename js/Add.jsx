import React, { Component } from 'react';
import Header from './Header';

class Add extends Component {
	state = {
		todos: this.props.todos
	};

	addNewTodo = event => {
		event.preventDefault();

		//TODO from here make the event data into a todo, add it to todos and execute this.props.save
	};

	render() {
		return (
			<div className="">
				<Header title="Add a TODO" />
				<form onSubmit={this.addNewTodo}>
					<input type="text" placeholder="ID" name="id" />
					<input type="text" placeholder="What" name="what" />
					<input type="text" placeholder="Details" name="details" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Add;
