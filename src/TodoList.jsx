// tslint:disable-next-line:ordered-imports
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import * as todoActions from './store/actions';
import * as selectors from './store/selectors';
import { Todo } from './store/models';

const TodoList = ({ todos, toggleTodo }) => {
  const handleToggle = event => toggleTodo(event.target.id);
  return (
    <List>
      {todos &&
        todos.map(todo => (
          <ListItem key={todo.id}>
            <Checkbox
              id={todo.id}
              checked={todo.done}
              onChange={handleToggle}
            />
            <ListItemText primary={todo.title} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Todo),
  toggleTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

const mapStateToProps = state => ({
  todos: selectors.getFilteredTodos(state),
});

export default connect(
  mapStateToProps,
  {
    toggleTodo: id => todoActions.toggle({ id }),
  }
)(TodoList);
