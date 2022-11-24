import { Box, Button, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Header } from '@common/components';
import { useStyles } from './home-page.styles';

export const HomePage: FC = observer(() => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.background} />
      {[...Array(14)].map((_, index) => (
        <div key={index} className="firefly" />
      ))}
      <Header />
      <Container className={classes.title}>
        <Typography variant="h2" fontWeight={500}>
          Start your adventure
        </Typography>
        <Typography variant="h6" fontWeight={300}>
          Join our community and we will do the rest
        </Typography>
        <Button sx={{ mt: 2 }} variant="outlined" size="large" color="inherit">
          Sign up for free
        </Button>
      </Container>
    </Box>
  );
});
