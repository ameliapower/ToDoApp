import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';

import { todoApp } from './store/reducers';
import { AddTodoContainer } from './Containers/AddTodo';
import { VisibleToDoList } from './Containers/ToDoList';
import { Footer } from './Components/Footer';


// SUGGESTIONS:
// ================
// separate out the parts /\
// output id /\
// cannot submit if empty /\
// add sorting /\
// save to localStorage
// remove tasks onClick
// display a number of tasks remaining in active list
// add a due date option
// assign task to user
// add toaster notifications


// TodoApp is the root Component
const TodoApp = () => (
	/* ref in react can be a string or a callback function
	when a fn ref gets the underlying DOM element (node) */ 
	<div id ="todo">		
		<AddTodoContainer  />
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



