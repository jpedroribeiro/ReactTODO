import React from 'react';
import Header from './Header';

const Todo = props => {
	let previewSet = '';
	if (!props.preview) {
		previewSet = (
			<main>
				<p>
					{props.details}
				</p>
			</main>
		);
	}

	return (
		<div className="">
			<Header
				title={props.what}
				makeItALink={props.showLink ? `/todo/${props.id}` : ``}
				helper={props.helper ? props.helper : false}
			/>
			<main>
				<span className="">
					<input type="checkbox" checked={!!props.status} />
					{props.id}
				</span>

				{previewSet}
			</main>
		</div>
	);
};

export default Todo;
