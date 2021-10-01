import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; 
import VerticalBar from './Chart/VerticalBar';
import DataGrid from './Tables/DataGrid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '720px',
  backgroundColor: '#0303033b',
  color: '#FFFFFF'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function ProtocolAttacks() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
            <Box>
              <Item elevation={8}>
                <VerticalBar/>
              </Item>
            </Box>
        </Grid>
        <Grid item md={12} xs={12}>
            <Box sx={{marginTop: 8}}>
              <Item elevation={8}>
                <DataGrid/>
              </Item>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
