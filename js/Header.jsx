import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
	let util,
		main = '';

	if (props.helper === 'search') {
		util = (
			<div>
				<input
					type="text"
					placeholder="Filter TODOs"
					value={props.searchTerm}
					onChange={props.onSearchChange}
				/>
				<Link to="/add">Add TODO</Link>
				<button onClick={props.handleDefaults}>Hard Reset TODOs values from JSON</button>
			</div>
		);
	} else if (props.helper === 'back') {
		util = <Link to="/">Back to list</Link>;
	} else {
		util = '';
	}

	if (props.makeItALink) {
		main = (
			<Link to={props.makeItALink}>
				{props.title}
			</Link>
		);
	} else {
		main = props.title;
	}

	return (
		<header>
			<h1>
				{main}
			</h1>
			{util}
		</header>
	);
};

export default Header;
