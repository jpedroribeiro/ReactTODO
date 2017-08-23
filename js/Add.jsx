import React, { Component } from 'react';
import Header from './Header';

class Add extends Component {
	state = {
		todos: this.props.todos,
		status: false
	};

	addNewTodo = event => {
		event.preventDefault();

		let updatedTodos = this.state.todos.concat([
			{
				id: event.target.elements.id.value,
				what: event.target.elements.what.value,
				details: event.target.elements.details.value,
				status: false
			}
		]);

		this.setState({ todos: updatedTodos, status: event.target.elements.id.value });

		this.props.save(updatedTodos);

		// Reset form
		event.target.reset();
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
				<p>
					{this.state.status ? `TODO ${this.state.status} added succesfully` : ``}
				</p>
			</div>
		);
	}
}

export default Add;
