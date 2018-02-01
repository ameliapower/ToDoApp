import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; 
import { connect, Provider } from 'react-redux';

import { addTodo } from './actions'; //, setVisibilityFilter, toggleTodo
import { todo, todoApp } from './store/reducers';
import { VisibleToDoList } from './Containers/ToDoList';
import { FilterLink } from './Containers/Link';



// COMPONENTS - move to components folder
// =========================================
// ToDo Component
export const ToDo = ({ 
	onClick,
	completed, //state explicitly data component needs to render
	text 
}) => (
	<li key={todo.id} onClick={onClick} 
		style = {{ textDecoration : completed ?
				'line-through' : 'none' }}>
		{text} 
	</li>
);


// AddTodo functional component
// functional components don't have instances, so cannot use "this", so adding variable input that we can refernce instead of using this.input as in previous version when it was in the class component
let nextId = 0;
let AddTodo = ({ dispatch }) => {
	let input;
	return (
		<div>
			<input type="text" ref={node => {
					input = node;
				}} />
			<button onClick={ () => {
				dispatch(addTodo(input.value)) 
				input.value = ""; 
			}}> Add a todo
			</button>
		</div>
	);
};

AddTodo = connect()(AddTodo);  //make container
 


//Footer Component containing FilterLink Component		
const Footer = ({ store }) => {
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



// TodoApp Component
const TodoApp = () => (
	/* ref in react can be a string or a callback function
	when a fn ref gets the underlying DOM element (node) */ 
	<div id ="todo">		
		<AddTodo  />
		<VisibleToDoList />
		<Footer />
	</div>
);


// Provider exposes store to components down the chain so that components can... 
// be aware of changes in the store and subscribe to them
ReactDOM.render(
	<Provider  store = {createStore(todoApp)}>
		<TodoApp/>
	</Provider>,
document.getElementById('root'));
registerServiceWorker();



