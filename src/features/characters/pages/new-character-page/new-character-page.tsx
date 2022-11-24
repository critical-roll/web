import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import { FC } from 'react';
import { Header } from '@common/components';
import { useBaseStyles } from '@styles';
import { Breadcrumbs, Navigation, Steps } from './components';
import { NewCharacterPageStore } from './new-character-page.store';
import { useStyles } from './new-character-page.styles';

export const NewCharacterPage: FC = () => {
  const { classes } = useStyles();
  const { classes: baseClasses } = useBaseStyles();

  return (
    <NewCharacterPageStore.StoreProvider>
      <Box className={baseClasses.gradient}>
        <Header />
        <Container>
          <Breadcrumbs />
          <Typography variant="h2" className={classes.title}>
            New Character
          </Typography>
          <Grid container direction="column" rowSpacing={6}>
            <Grid>
              <Navigation />
            </Grid>
            <Grid>
              <Steps />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </NewCharacterPageStore.StoreProvider>
  );
};
