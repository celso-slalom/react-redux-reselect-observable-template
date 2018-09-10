import PropTypes from 'prop-types';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import * as React from 'react';
import { connect } from 'react-redux';
import * as todosActions from './store/actions';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleTitleChange(ev) {
    this.setState({ title: ev.currentTarget.value });
  }

  handleAdd() {
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    const { title } = this.state;

    return (
      <form>
        <FormControl>
          <InputLabel htmlFor="title-simple">Title</InputLabel>
          <Input
            id="title-simple"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </FormControl>
        <Button type="button" onClick={this.handleAdd} disabled={!title}>
          Add
        </Button>
      </form>
    );
  }
}
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    addTodo: title => todosActions.add({ title }),
  }
)(TodoForm);
