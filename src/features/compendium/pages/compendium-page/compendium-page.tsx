import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { observer } from 'mobx-react-lite';
import { useBaseStyles } from '@styles';
import { Header } from '@common/components';
import { Breadcrumbs, Categories, Content } from './components';
import { useStyles } from './compendium-page.styles';
import { CompendiumPageStore } from './compendium-page.store';

export const CompendiumPage: FC = observer(() => {
  const { classes } = useStyles();
  const { classes: baseClasses } = useBaseStyles();

  return (
    <CompendiumPageStore.StoreProvider>
      <Box className={baseClasses.gradient}>
        <Header />
        <Container>
          <Breadcrumbs />
          <Typography variant="h2" className={classes.title}>
            Compendium
          </Typography>
          <Grid container direction="column">
            <Grid>
              <Categories />
            </Grid>
            <Grid sx={{ marginTop: 4 }}>
              <Content />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </CompendiumPageStore.StoreProvider>
  );
});
