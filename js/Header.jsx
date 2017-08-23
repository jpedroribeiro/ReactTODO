import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
	let util;
	if (props.search) {
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
	} else {
		util = <Link to="/">Back to list</Link>;
	}

	return (
		<header>
			<h1>
				{props.title}
			</h1>
			{util}
		</header>
	);
};

export default Header;
