import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { Link } from 'react-router-dom'


const Media = (props) => {
    const { products } = props;

    return (
        <div>
            <Grid container>
                {products && products.length ? (
                    <>
                        {products.map(product => {
                            return (
                                <Grid key={product._id} item xs={6} sm={6}>
                                    <Box width="100%">
                                        <Link to={{
                                            pathname: `/Shop/${product.category}/${product.id}`,
                                            params: {
                                                category: product.category,
                                                id: product.id
                                            }
                                        }}
                                        >
                                            <img style={{ width: "100%", height: 118 }} alt={product.productNameHindi} src={product.productURL} />
                                        </Link>
                                        <Box pr={2}>
                                            <Typography gutterBottom variant="body2">
                                                {product.productNameHindi}
                                            </Typography>
                                            <Typography display="block" variant="caption" color="textSecondary">
                                                {product.company}
                                            </Typography>
                                            <Typography variant="caption" color="textSecondary">
                                                {`${product.productName}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            );
                        })}
                    </>
                ) : Array.from(new Array(4)).map((item, index) => {
                    return (
                        <Grid item xs={6} sm={6}>
                            <Box key={index} width="100%">
                                <Skeleton variant="rect" width="100%" height={118} />
                            </Box>
                            <Box pt={0.5}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}



const Products = ({ products }) => {

    return (
        <Media products={products} />
    );
}

export default Products