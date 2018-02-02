import React from 'react';

import { ToDo } from './ToDo';

export const ToDoList = ({todos, onTodoClick, onSortClick, onResetClick }) => (
	<ul>
		{todos.map(t =>
			<ToDo key={t.id}
				{...t}
				onClick={() => onTodoClick(t.id)} 
			/>
		)}
		<button onClick={ () => onSortClick()}>Sort alphabetically</button>
		<button onClick={ () => onResetClick()}>Reset Sorting</button>
	</ul>
);

