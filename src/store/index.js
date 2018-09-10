import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { getType } from 'typesafe-actions';
import * as todos from './actions';
import fetchTodosEpic from './epics';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case getType(todos.add): {
      return [...state, action.payload];
    }
    case getType(todos.toggle): {
      return state.map(
        item =>
          item.id === action.payload.id
            ? {
              ...item,
              done: !item.done,
            }
            : item,
      );
    }
    case getType(todos.changeFilter): {
      return [...state];
    }
    case getType(todos.fetchTodos.success): {
      return [...action.payload];
    }
    case getType(todos.fetchTodos.failure): {
      console.error(action.payload);
      return [...state];
    }
    default:
      return state;
  }
};

const todosFilterReducer = (state = 'all', action) => {
  switch (action.type) {
    case getType(todos.changeFilter): {
      return action.payload;
    }
    default:
      return state;
  }
};

export const rootEpic = combineEpics(fetchTodosEpic);

const rootReducer = combineReducers({
  todos: todosReducer,
  todosFilter: todosFilterReducer,
});

export default rootReducer;
