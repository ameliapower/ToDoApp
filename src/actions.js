// ACTION CREATORS
// ========================

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
export const sortItems = (text) => {
	return {
		type: "SORT_ITEMS",
		text
	}
};
export const resetSorting = (id) => {
	return {
		type: "RESET_SORTING",
		id
	}
};
