import * as cuid from 'cuid';
import {
    createAsyncAction,
    createStandardAction,
} from 'typesafe-actions';

const FETCH_TODOS = 'todos/FETCH';
const FETCH_SUCCESS = 'todos/FETCH_SUCCESS';
const FETCH_ERROR = 'todos/FETCH_ERROR';

export const fetchTodos = createAsyncAction(FETCH_TODOS, FETCH_SUCCESS, FETCH_ERROR)();

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';

export const add = createStandardAction(ADD)
    .map(payload => ({
      payload: {
        done: false,
        id: cuid(),
        title: payload.title || 'New Todo',
      },
    }));

export const toggle = createStandardAction(TOGGLE)();
export const changeFilter = createStandardAction(CHANGE_FILTER)();