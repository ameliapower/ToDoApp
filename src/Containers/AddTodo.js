import { connect } from 'react-redux';
import React from 'react';

import { addTodo } from '../actions';

// AddTodo functional component
// functional components don't have instances, so cannot use "this", so adding variable input that we can refernce instead of using this.input as in previous version when it was in the class component
// let nextId = 0;
export let AddTodo = ({ dispatch }) => {  
	let input;
	return (
		<div>
			<h1>To Do App</h1>
			<input type="text" placeholder="Enter a new task" 
					ref={ node => { input = node; } }
			 />
			<button 
				onClick={ () => {
					if(input.value){
						dispatch(addTodo(input.value)) 
						input.value = ""; 
					}
			}} className="button"> Add a todo
			</button>
		</div>
	);
};


export const AddTodoContainer = connect()(AddTodo);  
 