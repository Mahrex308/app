import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Teams() {
  const classes = useStyles();

  return (
    <div> 
      <div className='Team-Match'>
        <div className={classes.container}>
          <h2>TEAM</h2>

          <Input
          placeholder="0000"
          className={classes.input}
          inputProps={{
            'aria-label': 'description',
          }}
          />
        </div>
      </div>

      <div className='Team-Match'>
        <div className={classes.container}>
          <h2>MATCH</h2>

          <Input
          placeholder="000"
          className={classes.input}
          inputProps={{
            'aria-label': 'description',
          }}
          />
        </div>
      </div>
      
      <div className='Button-Start'>
        <Button variant="contained" color="secondary" className={classes.button}>
          START
        </Button>
      </div>
    </div>
  );
}