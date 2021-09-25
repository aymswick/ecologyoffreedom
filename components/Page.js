import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { theme } from '../styles/theme';

const useStyles = makeStyles({
  page: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.main,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: theme.palette.tree.dark,
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.tree.trunk,
  },
});

export const Page = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <main>
        <Grid container spacing={4}>
          <Grid item xl={12}>
            <Typography className={classes.title} component="h1" variant="h1">
              The Ecology of Freedom
            </Typography>
            <Typography
              className={classes.subtitle}
              component="h3"
              variant="h3"
            >
              and the dissolution of Hierarchy
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {props.children}
        </Grid>
        >
      </main>
      <footer></footer>
    </div>
  );
};
