import { combineReducers } from 'redux'; 

// RECUCERS - uses the action
// =========================================
// this pattern is called Redux Composition
// Reducers are pure functions (allows no mutation) that implement the update logic 

export const todo = (state, action) => {
	switch(action.type){
		case "ADD_TODO" :
			return { //concerns only single todo so we can just return without adding it to state or using an array
				id: action.id,
				text: action.text,
				completed: false
			}
		case "TOGGLE_TODO" :
			if(state.id === action.id) { //state here refers to the individual todo, as we're just dealing with 1
				return{
					...state, //for this id, toggle completed
					completed: !state.completed  //invert value
				}
			}
			return state; 
		default:
			return state;
	}
};

export const todos = (state=[], action) => {
	switch(action.type) {
		case "ADD_TODO" :
			return [
				...state,
				todo(undefined, action) //calling todo fn from our todo reducer above
			]; 
		case "TOGGLE_TODO" :
			return state.map(t => todo(t, action)); //on each item in array, call the toggle reducer
		case "SORT_ITEMS" :
			return state.slice().sort((a, b) => { //avoid mutation by making a copy with slice before sorting. (Sorting is a mutating method)
			    var textA = a.text.toLowerCase(),
			    	textB = b.text.toLowerCase();
			    if (textA < textB)
			      return -1;
			    if (textA > textB)
			      return 1;
			});
		case "RESET_SORTING" : //sort by id
			return state.slice().sort((a,b) => {
				var firstId = a.id;
				var lastId = b.id;
				if(firstId > lastId)
					return 1;
			});
		default:
			return state;
	} 
};

export const visibilityFilter = (
    state = 'SHOW_ALL', 
    action 
    ) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


//with ES6 literal shorthand notation, we can omit the values (reducer name) and keep the key(the state field name)
export const todoApp = combineReducers({
	todos, 
	visibilityFilter
});
