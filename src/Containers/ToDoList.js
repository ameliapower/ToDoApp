import { connect } from 'react-redux';

import { toggleTodo, sortItems, resetSorting } from '../actions';
import { ToDoList } from '../Components/ToDoList';


const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL" :
			return todos;
		case "SHOW_COMPLETED" :
			return todos.filter(
				t => t.completed
			);
		case "SHOW_ACTIVE" : 
			return todos.filter(
				t => !t.completed
			);
		default:
			return todos;
	}
}


// renaming mapStateToProps as we're working in one file and using the connect fn
// several times - normally when working in different components it isn't necesary
const mapStateToToDoListProps = (state) => { //these props are updated anytime state changes
	return{
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};
const mapDispatchToToDoListProps = (dispatch) => {
	return{
		onTodoClick: (id) => { //onTodoClick is a prop with the onClick method
			console.log(id)
			// dispatch({
			// 	type: 'TOGGLE_TODO',
			// 	id //id that is clicked
			// })
			dispatch(toggleTodo(id)); //use an actioncreator called toggleTodo instead of above dispatch
		},
		// onCountClick: (todos) => {
		// 	dispatch(countAllToDos(todos));
		// }
		onSortClick: (text) => {
			dispatch(sortItems(text));
		},
		onResetClick: (id) => {
			dispatch(resetSorting(id));
		}

	}
}
export const VisibleToDoList = connect(
	mapStateToToDoListProps,
	mapDispatchToToDoListProps
)(ToDoList); //pass in the UI component, which is the UI component that is rendered

