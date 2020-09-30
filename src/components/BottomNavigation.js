import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
    }
});

const LabelBottomNavigation = () => {
    // object destructuring for getting fragment name function
    // pass fragment name as props. After setting new value to
    // bottom navigation, send back value to App component using fragment function of props 

    const classes = useStyles();


    return (
        <BottomNavigation className={classes.grow}>
            
                <BottomNavigationAction label="Shop" value="shop" component={Link} to="/" icon={<HomeIcon />} className={classes.iconMargin} />
                <BottomNavigationAction label="Favorites" value="favorites" component={Link} to="/favourites" icon={<FavoriteIcon />} className={classes.iconMargin} />
            
                <BottomNavigationAction label="Crop Doctor" value="cropDoctor" component={Link} to="/cropDoctor" icon={<AcUnitIcon />} className={classes.iconMargin} />
            
                <BottomNavigationAction label="Community" value="community" component={Link} to="/community" icon={<CardMembershipIcon />} className={classes.iconMargin} />

        </BottomNavigation>
    );
}


export default LabelBottomNavigation; 