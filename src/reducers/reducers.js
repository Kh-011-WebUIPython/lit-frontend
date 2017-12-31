import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import { SIGN_IN, SIGN_UP } from '../actions/actions';


const initialState = {
    isAuthorized: false,
    isFetching: false,
}

function signIn(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return Object.assign({}, state, {isAuthorized: true});
        default:
            return state;
    }
}

function signUp(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return Object.assign({}, state, {isFetching: true,});
        default:
            return state;

    }
}


const allReducers = combineReducers({ signIn, signUp, form: formReducer });

export default allReducers

/*
function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}


async function signUpRequest() {
    try {
        dispatch({type: 'startSignUpRequest'});
        const data = fetch('litvcs.win/users', {
            method: 'POST',
            body: {
                username: 'exceedcat',
                email: 'exceed@cat.com',
                password: '12345678',
            }
        });
        dispatch({type: 'startUserDataFetch', payload: data})
    } catch (e) {
        dispatch({type: 'failedToFetch'})
    }
}


async function myFetch() {
    try {
        dispatch({type: 'startUserDataFetch'})
        const data = fetch('/userData');
        dispatch({type: 'startUserDataFetch', payload: data})
    } catch (e) {
        dispatch({type: 'failedToFetch'})
    }
}
*/
