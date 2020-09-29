import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Skeleton from './Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "95%",
        marginLeft: "2.5%",
        border: ""
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const TopDeals = () =>{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={12}>
                    <Paper variant="outlined" className={classes.paper}>Top Deals</Paper>
                </Grid>                
            </Grid>
            <Skeleton />
        </div>
    );
}

export default TopDeals