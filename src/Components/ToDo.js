import React from 'react';

import { todo } from '../store/reducers';


export const ToDo = ({ 
	onClick, //state explicitly what data the should render
	completed, 
	text,
	id
}) => (
	<li key={todo.id} onClick={onClick} 
		// style = {{ textDecoration : completed ?
		// 		'line-through' : 'none' }}
		className={ completed ? 'done' : '' } >
		<strong>{id+1}.</strong> {text} 
	</li>

);
