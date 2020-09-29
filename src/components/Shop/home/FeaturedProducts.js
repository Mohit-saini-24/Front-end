import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { fetchFeaturedProducts } from '../../../flux/actions'

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

const FeaturedProducts = (props) => {
    const classes = useStyles();
    const { featuredProducts, fetchFeaturedProducts } = props;

    useEffect(() => {
        fetchFeaturedProducts()
    },[fetchFeaturedProducts])
    console.log(featuredProducts)
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={12}>
                    <Paper variant="outlined" className={classes.paper}>Featured Product</Paper>
                </Grid>
            </Grid>
            <Skeleton products={featuredProducts} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        featuredProducts: state.featuredProducts
    }
}


export default connect(mapStateToProps,
    { fetchFeaturedProducts }
)(FeaturedProducts)