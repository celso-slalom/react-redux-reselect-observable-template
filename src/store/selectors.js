import { createSelector } from 'reselect';

export const getTodos = state => state.todos;

export const getTodosFilter = state => state.todosFilter;

export const getFilteredTodos = createSelector(
  getTodos,
  getTodosFilter,
  (todos, todosFilter) => {
    switch (todosFilter) {
      case 'completed':
        return todos.filter(t => t.done);
      case 'active':
        return todos.filter(t => !t.done);

      default:
        return todos;
    }
  },
);
