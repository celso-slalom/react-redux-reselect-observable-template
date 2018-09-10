import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = props => <Link to="/" {...props} />;
const TodosLink = props => <Link to="/todos" {...props} />;

const Navbar = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Button component={HomeLink}>
        <Typography>Home</Typography>
      </Button>
      <Button component={TodosLink}>
        <Typography>Todos</Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
