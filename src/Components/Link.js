import React from 'react';

// Link Functional Component - only concerned with look
export const Link = ({
	children, // contents of link 
	active,
	onClick 
}) => {
	if(active){ // if current then just show text as plain without link
		return <span>{children}</span>
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
