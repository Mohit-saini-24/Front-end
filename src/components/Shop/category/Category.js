import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import { fetchCategoryAll } from '../../../flux/actions';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const Category = (props) => {
    const { categoryProducts, fetchCategoryAll } = props

    console.log(categoryProducts)
    const classes = useStyles();

    useEffect(() => {
        fetchCategoryAll(props.location.params.category)
    }, [fetchCategoryAll])

    return (
        <div>
            {categoryProducts.length ? (
                <>
                    {categoryProducts.map(product => {
                        return (
                            <Card className={classes.root} key={product._id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={product.productNameHindi}
                                        height="140"
                                        image={product.productURL}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.productNameHindi}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                           { product.productDescription }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>

                        );
                    })}

                </>
            ) : (
            <>
                Loading
            </>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categoryProducts: state.categoryProducts
    }
}

export default connect(
    mapStateToProps,
    { fetchCategoryAll }
)(Category)