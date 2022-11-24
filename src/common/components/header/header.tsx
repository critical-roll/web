import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Person';
import { LogoSvg } from '@assets/svg';
import { AuthService } from '@features/auth/services';
import { Link } from '../link/link';
import { useStyles } from './header.styles';

export const Header: FC = observer(() => {
  const { classes } = useStyles();

  const handleLoginClick = () => {
    AuthService.loginWithRedirect();
  };

  return (
    <Container className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Grid container alignContent="center" alignItems="center" className={classes.content} columnGap={6}>
          <Grid item>
            <Grid container component={Link} href="/" className={classes.title} alignItems="center">
              <LogoSvg className={classes.logo} />
              <Typography fontWeight={500}>Critical Roll</Typography>
            </Grid>
          </Grid>
          <Grid item flexGrow={1}>
            <Grid container alignItems="center" columnGap={5}>
              <Grid item>
                <Link href="/compendium" className={classes.link}>
                  Compendium
                </Link>
              </Grid>
              <Grid item>
                <Link href="/characters/new" className={classes.link}>
                  Characters
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" columnGap={2} sx={{ height: 56 }}>
              <Divider orientation="vertical" />
              <IconButton onClick={handleLoginClick}>
                <LoginIcon color="action" sx={{ fontSize: 30 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
});
