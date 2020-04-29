import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const CustomizedInputBase = (props) => {
  const classes = useStyles();

  const handleChange = (e) => {
    props.onChange(e);
  }

  const handleKeyDown = (e) => {
    props.onKeyDown(e);
  }

  return (
    <Paper component="form" className="search-input">
      <InputBase
        className={classes.input}
        placeholder="Search by city"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => props.handleClick()}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;