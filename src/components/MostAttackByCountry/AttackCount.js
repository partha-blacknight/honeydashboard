import React from 'react'
import Grid from '@mui/material/Grid';
import AttackBadge from './AttackBadge';

function AttackCount() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
                <Grid item xs={2}>
                    <AttackBadge/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AttackCount;
