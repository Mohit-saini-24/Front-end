import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { fetchCategoryFertilizer } from '../../../flux/actions'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        overflow: "auto"
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const FertilizerSlider = (props) => {

    const { fertilizer, fetchCategoryFertilizer } = props
    useEffect(() => {
        fetchCategoryFertilizer()
    }, [fetchCategoryFertilizer])

    const classes = useStyles();
    const theme = useTheme()
    console.log(fertilizer)
    return (
        <div>
            <Box className={classes.root}>
                {fertilizer.length ? (
                    <>
                        {fertilizer.map(product => {
                            return (
                                <Link to={{
                                    pathname: `/shop/${product.category}/${product._id}`,
                                    params:{
                                        category:product.category,
                                        id:product._id
                                    }
                                }}
                                >
                                    <Avatar key={product._id} src={product.productURL} className={`${classes.large} ${classes.purple}`} >A</Avatar>
                                </Link>
                            );
                        })}
                        <Link to={{
                            pathname: `/shop/Fertilizer}`,
                            params:{
                                category:'Fertilizer'
                            }
                        }}
                        >
                            <Avatar className={`${classes.large} ${classes.purple}`} >...</Avatar>
                        </Link>
                    </>
                ) : <Avatar className={`${classes.large} ${classes.orange}`} ></Avatar>}

            </Box>
            <p>
                <Typography >
                    Fertilizer
                </Typography>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        fertilizer: state.fertilizer
    }
}
export default connect(
    mapStateToProps,
    { fetchCategoryFertilizer }
)(FertilizerSlider) 