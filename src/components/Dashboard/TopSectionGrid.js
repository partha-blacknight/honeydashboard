import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import TopLeftPieChart from './Chart/TopLeftPieChart';
import TopRightLineChart from './Chart/TopRightLineChart';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '480px',
  backgroundColor: '#020000'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const TopSectionGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <ThemeProvider theme={darkTheme}>
            <Box>
              <Item elevation={8}>
                <TopLeftPieChart/>
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
        <Grid item md={8} xs={12}>
          <ThemeProvider theme={darkTheme}>
            <Box>
              <Item elevation={8}>
                <TopRightLineChart/>
              </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopSectionGrid;
