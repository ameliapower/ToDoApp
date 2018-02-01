import React from 'react';
import { ToDo } from '../index';

export const ToDoList = ({todos, onTodoClick }) => (
	<ul>
		{todos.map(t =>
			<ToDo key={t.id}
				{...t}
				onClick={() => onTodoClick(t.id)} 
			/>
		)}
	</ul>
);

