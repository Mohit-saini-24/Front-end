import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            position: "fixed",
            bottom: '80px',
            right: '30px',
            backgroundColor: 'green'
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(10),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Fab color="primary" aria-label="Phone">
                <Link to="/favourites" >
                    <PhoneIcon />
                </Link>
            </Fab>


        </div>
    );
}
