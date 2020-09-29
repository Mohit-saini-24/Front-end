import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import RoundIcons from './RoundIcons';
import Poster from './Poster';
import FeaturedProducts from './FeaturedProducts';
import TopDeals from './TopDeals';
import SeedSlider from './sliders/SeedSlider';
import HerbicideSlider from './sliders/HerbicideSlider';
import FungicideSlider from './sliders/FungicideSlider';
import InsecticideSlider from './sliders/InsecticideSlider';
import FertilizerSlider from './sliders/FertilizerSlider';
import OtherSlider from './sliders/OtherSlider';
import Product from './product/Product';
import Category from './category/Category'

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
        <BrowserRouter>
            <div>
                <Route path="/shop" exact component={HomePage} />
                <Route path={`/shop/:category`} exact component={Category} />
                <Route path={`/shop/:category/:id`} exact component={Product} />
            </div>
        </BrowserRouter>
    );
}

export default Shop;