import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Link } from '@common/components';
import { useStyles } from './breadcrumbs.styles';

export const Breadcrumbs: FC = () => {
  const { classes } = useStyles();

  return (
    <Box>
      <MUIBreadcrumbs className={classes.root} aria-label="breadcrumb">
        <Link href="/" underline="hover" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Compendium</Typography>
      </MUIBreadcrumbs>
    </Box>
  );
};
