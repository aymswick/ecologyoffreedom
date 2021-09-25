import { Card, makeStyles } from '@material-ui/core';

import { theme } from '../styles/theme';

const useStyles = makeStyles({
  eco: {
    backgroundColor: theme.palette.tree.dark,
    // color: theme.palette.text.main,
  },
});
export const EcoCard = (props) => {
  const classes = useStyles();
  return <Card className={classes.eco}>{props.children}</Card>;
};
