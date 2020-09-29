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


import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

    const [fragment, setFragment] = React.useState('shop')
    const handleFragmentChange = (getFragment) => {
        setFragment(getFragment)
    }

    return (
        <BrowserRouter>
            <div>
                <AppBar />
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
                    <Route path="/Cart" exact component={Community} />
                    <Route path="/Orders" exact component={Community} />
                    <Route path="/Contact" exact component={Community} />
                    <Route path="/Privacy" exact component={Community} />
                </Switch>
                <br />
                <br />
                <FabIcon />
                <BottomNavigation fragmentName={handleFragmentChange} />
            </div>
        </BrowserRouter>
    );
}

export default App