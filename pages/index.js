import Head from 'next/head';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

import { Page } from '../components/Page';
import { EcoCard } from '../components/EcoCard';
import { theme } from '../styles/theme';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    color: theme.palette.tree.dark,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(4),
  },
  gridItem: {
    margin: theme.spacing(1),
  },
});

const themes = [
  {
    number: 1,
    content: `Environmentalism is based on individual, disparate
scientific/engineering solutions which are reductive and do
not have a proper trajectory for dealing with the holsitic
problem of cooperation with "first nature"`,
  },
  {
    number: 2,
    content: `Much of environmentalism and many types of ecology are too similar to religions - they are heavily spiritual, attribute human traits and motives to unconscious organisms & inanimate substrates. These movements mean well, but accomplish little because they are more content with pleasing their diciples than adjusting society to live efficiently with our environment`,
  },
  {
    number: 3,
    content: `Social Ecology examines ALL parts of human life & first nature, and attempts to construct a harmonious society atop our Earth substrate. It does not imbue insects with emotion or ethics, yet it recognizes the fact and the necessity of the food web and ecological balance.`,
  },
  {
    number: 4,
    content: `Most of our colloquial understanding of natural hierarchy is a lie from the 1900s - historians, scientists, and anthropologists of the time projected their own desires for and memories of human stratified society onto groups of animals. Jane Goodall did this with apes, many conflated the actions of a specific animal in a specific (artificial) environment with the social nature of that species. This mistake reverberates through our current day society, necessitating capitalism on the basis that hierarchy and dominance are the "first natural" order.`,
  },
];

export default function Home() {
  const classes = useStyles();
  return (
    <Page>
      <Grid container className={classes.gridContainer} spacing={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.title} component="h4" variant="h4">
            Themes
          </Typography>
        </Grid>

        {themes.map((item) => (
          <Grid
            item
            className={classes.gridItem}
            key={item.number}
            xs={12}
            sm={12}
            md={4}
            lg={2}
            xl={2}
          >
            <EcoCard className={classes.card}>
              <CardContent>
                <Typography>
                  {item.number}. {item.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large">Explore Citations</Button>
              </CardActions>
            </EcoCard>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
