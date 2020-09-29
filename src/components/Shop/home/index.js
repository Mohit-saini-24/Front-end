import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import RoundIcons from './RoundIcons';
import Poster from './Poster';
import FeaturedProducts from './FeaturedProducts';
import TopDeals from './TopDeals';
import SeedSlider from '../sliders/SeedSlider';
import HerbicideSlider from '../sliders/HerbicideSlider';
import FungicideSlider from '../sliders/FungicideSlider';
import InsecticideSlider from '../sliders/InsecticideSlider';
import FertilizerSlider from '../sliders/FertilizerSlider';
import OtherSlider from '../sliders/OtherSlider';
import Product from '../product/Product';
import Category from '../category/Category'

const HomePage = () => {

    return (
        <div >
            <RoundIcons />
            <Poster />
            <FeaturedProducts />
            <TopDeals />
            <SeedSlider />
            <HerbicideSlider />
            <FertilizerSlider />
            <OtherSlider />
            <InsecticideSlider />
            <FungicideSlider />
            <br />
            <br />
        </div>
    )
}

const Shop = (props) => {
    console.log(props)
    return (
        <div>
            <Route path="/" exact component={HomePage} />
        </div>
    );
}

export default Shop;