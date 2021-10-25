import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import AttackSummaryChart from './Chart/AttackSummaryChart';
import AttackSummaryTable from './Tables/AttackSummaryTable';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#0303033b',
  color: '#FFFFFF'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function AttacksSummary() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, marginBottom: 10 }}>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
            <Box>
              <Item elevation={8}>
                <AttackSummaryChart/>
              </Item>
            </Box>
        </Grid>
        <Grid item md={12} xs={12}>
            <Box>
              <Item elevation={8}>
                <AttackSummaryTable/>
              </Item>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
