import { connect } from 'react-redux';

import { Link } from '../Components/Link';
import { setVisibilityFilter } from '../actions';

const mapStateToLinkProps = (state, ownProps) => {
	return {  //if they match, that one should appear active
		active: 
		ownProps.filter 
		=== state.visibilityFilter
	}
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return{
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
};

export const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);
