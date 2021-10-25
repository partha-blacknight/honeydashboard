import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import MostAttackByCountryChart from './Chart/MostAttackByCountryChart';
import AttackCountryTable from './Tables/AttackCountryTable';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '550px',
  backgroundColor: '#0303033b'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const AttackByCountry = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
            <Box>
              <Item elevation={8}>
                <MostAttackByCountryChart/>
              </Item>
            </Box>
        </Grid>
        <Grid item md={8} xs={12}>
            <Box>
              <Item elevation={8}>
                <AttackCountryTable/>
              </Item>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AttackByCountry;
