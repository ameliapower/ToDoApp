import React from 'react';

import { FilterLink } from '../Containers/Link';


//Footer Component containing FilterLink Container		
export const Footer = ({ store }) => {
	return(
		<p>
			<span>Show:</span> 
			{''}
			<FilterLink filter='SHOW_ALL' store={store} >
				<span>All</span>
			</FilterLink>
			{''}
			<FilterLink filter='SHOW_ACTIVE' store={store} >
				<span>Active</span> 
			</FilterLink>
			{''}
			<FilterLink filter='SHOW_COMPLETED' store={store}>
				<span>Completed</span>
			</FilterLink>
		</p>
	);
}