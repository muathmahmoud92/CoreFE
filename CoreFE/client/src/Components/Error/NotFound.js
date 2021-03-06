import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function NotFound(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Error 404
        </Typography>
        <Typography component="p">
          Page does not exist.
        </Typography>
      </Paper>
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);