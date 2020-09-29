import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosters } from '../../../flux/actions'

import {
  makeStyles, /**, useTheme*/
  useTheme
} from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Skeleton from '@material-ui/lab/Skeleton';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const DisplayPosters = ({ posters, fetchPosters }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    fetchPosters();
  }, [fetchPosters])

  const renderPosters = () => {
    if (!posters.length) {
      return <Skeleton variant="rect" width="100%" height={118} />
    }
    return posters.map((product, index) => {
      return (
        <div key={index}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img className={classes.img} src={product.productURL} alt={product.company} />
          ) : null}
        </div>
      );
    });
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>

      <Paper square elevation={0} className={classes.header}>
        <Typography>{posters.length ? posters[activeStep].productNameHindi:'Loading'}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {renderPosters()}
      </AutoPlaySwipeableViews>
      <br />

    </div>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 140,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

const mapStateToProps = (state) => {
  return { posters: state.posters }
};

export default connect(
  mapStateToProps,
  { fetchPosters }
)(DisplayPosters);

