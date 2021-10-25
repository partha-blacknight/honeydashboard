import React from 'react';
import Layout from "../../components/UI/Layout";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import AttackCount from '../../components/MostAttackByCountry/AttackCount';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '720px',
    backgroundColor: '#0303033b'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const MostAttackByCountry = () => {
    return (
        <Layout>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Box>
                            <Item elevation={8}>
                                <AttackCount/>
                            </Item>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default MostAttackByCountry;
