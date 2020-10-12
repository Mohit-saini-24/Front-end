import React, { useState, useEffect } from 'react';


import FabIcon from './components/FabIcon';
import AppBar from './components/AppBar';
import BottomNavigation from './components/BottomNavigation';
import Shop from './components/Shop/home/index';
import Favourites from './components/Favourites';
import CropDoctor from './components/CropDoctor';
import Community from './components/Community';
import Category from './components/Shop/category/Category';
import Product from './components/Shop/product/Product'


import { authMiddleWare } from './utils/auth'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import CartPage from './components/Shop/cart/Cart'

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar,
    root: {},
    details: {
        display: 'flex'
    },
    avatar: {
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0
    },
    locationText: {
        paddingLeft: '15px'
    },
    buttonProperty: {
        position: 'absolute',
        top: '50%'
    },
    uiProgess: {
        position: 'fixed',
        zIndex: '1000',
        height: '31px',
        width: '31px',
        left: '50%',
        top: '35%'
    },
    progess: {
        position: 'absolute'
    },
    uploadButton: {
        marginLeft: '8px',
        margin: theme.spacing(1)
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    submitButton: {
        marginTop: '10px'
    }
});

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            uiLoading: true,
            phoneNumber:''
        }
    }

    componentWillMount = () => {
        console.log(this.props)
        authMiddleWare(this.props.history);
        const sessionCookie = localStorage.getItem('sessionCookie');
        console.log(sessionCookie)
        axios.defaults.headers.common = { Authorization: `${sessionCookie.toString()}` };
        axios
            .get('/user')
            .then((response) => {
                console.log(response.data);
                console.log(response.data.phoneNumber);
                this.setState({
                    phoneNumber: response.data.phoneNumber,
                    uiLoading: false
                });
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    this.props.history.push('/login');
                }
                console.log(error.response);
                this.setState({ errorMsg: 'Error in retrieving the data' });
            });
    };

    render() {
        const { classes, ...rest } = this.props;
        if (this.state.uiLoading === true) {
            return (
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
                </main>
            );
        } else {
            return (
                <BrowserRouter>
                    <div>
                        <AppBar phoneNumber={this.state.phoneNumber} />
                        <Switch>
                            <Route path="/" exact component={Shop} />
                            <Route path="/Favourites" exact component={Favourites} />
                            <Route path="/CropDoctor" exact component={CropDoctor} />
                            <Route path="/Community" exact component={Community} />
                            <Route path="/Home" exact component={Community} />
                            <Route path="/Blog" exact component={Community} />
                            <Route path="/Shop" exact component={Shop} />
                            <Route path="/Shop/:category" exact component={Category} />
                            <Route path="/Shop/:category/:id" exact component={Product} />
                            <Route path="/Cart" exact component={CartPage} />
                            <Route path="/Orders" exact component={Community} />
                            <Route path="/Contact" exact component={Community} />
                            <Route path="/Privacy" exact component={Community} />
                        </Switch>
                        <br />
                        <br />
                        <FabIcon />
                        <BottomNavigation />
                    </div>
                </BrowserRouter>
            )
        }
    }
}

export default withStyles(styles)(Home)

