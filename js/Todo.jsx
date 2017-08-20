import React from 'react';

const Todo = props => {
	return (
		<div className="">
			<header>
				<h1>
					{props.what}
				</h1>
				<span className="">
					<input type="checkbox" checked={!!props.status} />
					{props.id}
				</span>
			</header>
			<main>
				<p>
					{props.details}
				</p>
			</main>
		</div>
	);
};

export default Todo;
