import React from 'react';

export const Link = ({
	children, // contents of Link 
	active,
	onClick 
}) => {
	if(active){ // if current, then just show text as plain without link
		return <span className="active">{children}</span>
	}
	return (
		<button onClick={ e => {
			e.preventDefault();
			onClick(); //passing onClick as prop above
		}}>
		{children} 
		</button>
	);
};
