import {get, post} from 'jquery';
import * as types from './actionTypes';

import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
/* eslint-disable no-console */
export function loadGraphQLDataSuccess(resultGraphQLData) { 
  return { type: types.LOAD_GRAPHQL_DATA_SUCCESS, resultGraphQLData };
}

export function loadGraphQLData() {  
  return function(dispatch) {
    dispatch(beginAjaxCall());    
    get("/data/links").done(resultGraphQLData => {
        console.log('in loadGraphQLData resp****** => ',resultGraphQLData);
        dispatch(loadGraphQLDataSuccess(resultGraphQLData));
    });  
  };
}

