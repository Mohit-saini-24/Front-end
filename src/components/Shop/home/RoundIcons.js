import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
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

const LetterAvatars = (props) => {

  const classes = useStyles();
  console.log(props)

  return (

    <div className={classes.root}>

      <Typography >
        <Link to={{
          pathname: '/shop/Seed',
          params: {
            category: 'Seed'
          }
        }}
        >
          <Avatar className={`${classes.orange} ${classes.large}`}>
            S
          </Avatar>
            Seed
        </Link>
      </Typography>


      <Link to={{
        pathname:"/shop/Herbicide",
        params: {
          category: 'Herbicide'
        }
      }}>
        <Typography>
          <Avatar className={`Herbicide ${classes.orange} ${classes.large}`}>
            H
            </Avatar>
            Herbicide
          </Typography>
      </Link>

      <Link to={{
        pathname: '/shop/Fungicide',
        params: { category: 'Fungicide' }
      }}>
        <Typography>
          <Avatar className={`Fungicide ${classes.orange} ${classes.large}`}>
            F
            </Avatar>
            Fungicide
          </Typography>
      </Link>

      <Link to={{
        pathname: '/shop/Insecticide',
        params: {
          category: 'Insecticide'
        }
      }}>
        <Typography>
          <Avatar className={`Insecticide ${classes.orange} ${classes.large}`}>
            I
            </Avatar>
            Insecticide
          </Typography>
      </Link>

      <Link to={{
        pathname: '/shop/Fertilizer',
        params: {
          category: 'Fertilizer'
        }
      }}>
        <Typography>
          <Avatar className={`Fertilizer ${classes.orange} ${classes.large}`}>
            F
            </Avatar>
            Fertilizer
          </Typography>
      </Link>

      <Link to={{
        pathname: '/shop/Other',
        params: {
          category: 'Other'
        }
      }}>
        <Typography>
          <Avatar className={`Other ${classes.orange} ${classes.large}`}>
            O
            </Avatar>
            Other
          </Typography>
      </Link>
    </div>
  );
}

export default LetterAvatars 