import React, { Component } from 'react';
import Header from './Header';

class Todo extends Component {
	state = {
		isChecked: this.props.status
	};

	updateTODO = event => {
		this.setState({ isChecked: !this.state.isChecked });
		this.props.updateTODOinList(this.props.id, event.target.checked);
	};

	render() {
		let previewSet = '';
		if (!this.props.preview) {
			previewSet = (
				<p>
					{this.props.details}
				</p>
			);
		}

		return (
			<div className="">
				<Header
					title={this.props.what}
					makeItALink={this.props.showLink ? `/todo/${this.props.id}` : ``}
					helper={this.props.helper ? this.props.helper : false}
				/>
				<main>
					<span className="">
						<input type="checkbox" checked={!!this.state.isChecked} onChange={this.updateTODO} />
						{this.props.id}
					</span>

					{previewSet}
				</main>
			</div>
		);
	}
}

export default Todo;
