import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function graphQLReducer(state = initialState, action) {
  console.log('entered in graphQLReducer', action.resultGraphQLData);
  switch (action.type) {
    case 'LOAD_GRAPHQL_DATA_SUCCESS':
      return Object.assign({}, state, {
        reduxGraphQLData: action.resultGraphQLData
        });      
    default:
      return state;
  }
}




   