// ACTION CREATORS
// ========================
// this fn is dispatched from AddToDo Component, instead of ...
// using the component to deal with incrementing nextId, do logic in action creators
let nextId = 0;
export const addTodo = (text) => {
	return{
		type: 'ADD_TODO',
		id: nextId++,
		text
	};
};
// action creators take args about the action and returns the action object
export const setVisibilityFilter = (filter) => {
	return{
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

export const toggleTodo = (id) => {
	return{
		type: "TOGGLE_TODO",
		id
	};
};
