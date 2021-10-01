import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import LiveAttackChart from './Chart/LiveAttackChart';
import LiveAttackTable from './Tables/LiveAttackTable';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '720px',
  backgroundColor: '#0303033b'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const LiveAttacks = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
            <Box>
              <Item elevation={8}>
                <LiveAttackChart/>
              </Item>
            </Box>
        </Grid>
        <Grid item md={12} xs={12}>
            <Box>
                <LiveAttackTable/>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LiveAttacks;
