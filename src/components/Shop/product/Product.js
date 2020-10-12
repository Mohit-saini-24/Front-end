import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '@material-ui/lab/Skeleton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'


import {
    Box,
    AccordionDetails,
    Accordion,
    Button,
    Chip,
    Grid,
    Divider,
    Typography,
    AccordionSummary

} from '@material-ui/core';
import axios from 'axios';


// edit link on this page line 68
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    imageBox: {

        alignItems: "center"
    },
    image: {
        width: 240,
        height: 200,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
}));

const ProductPage = (props) => {

    const [newProduct, setnewProduct] = useState([])
    const [varientPrice, setVarientPrice] = useState(0)
    const [varientName, setVarientName] = useState('')
    const [addedToCart, setAddedToCart] = useState(false)
    // const [selectedColor, setselectedColor] = useState('')
    const ref = useRef()

    console.log(props)
    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios
                .get(`http://localhost:5000/shop/${props.location.params.category}/${props.location.params.id}`)
            setnewProduct(data.query);

            if (data.temp.length) {
                setAddedToCart(true)
            }
            setVarientPrice(data.query[0].varients[0].discountPrice)
            setVarientName(data.query[0].varients[0].varientName)
        };
        fetch();
    }, [])

    const changeVarientPrice = (event) => {
        var temp = newProduct[0].varients.filter(varient => varient.varientName === event.target.textContent)
        setVarientPrice(temp[0].discountPrice)
        setVarientName(temp[0].varientName)
    }
    const classes = useStyles();

    const handleAddClick = () => {
        var id = newProduct[0]._id
        // setAddedToCart(true)
        console.log(id)

        axios.post(`http://localhost:5000/shop/add/${id}/${varientName}`)
            .then((response) => {
                console.log(response.data)
                setAddedToCart(true)
            }
            ).catch(err => {
                console.log(err)
            })
    }

    

    return (
        <div ref={ref} className={classes.root}>
            {newProduct.length ? (
                <>
                    <div className={classes.section1}>
                        <Box className={classes.imageBox} >
                            <img src={newProduct[0].productURL} className={classes.image} />
                        </Box>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {newProduct[0].productName}
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                    Price : {varientPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Product Description</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {newProduct[0].productDescription}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <Typography gutterBottom variant="body1">
                            Select Varient
                        </Typography>
                        <div>
                            {newProduct[0].varients.map(varient => {

                                return (
                                    <>
                                        <Chip key={varient.varientName} className={classes.chip} label={varient.varientName} onClick={changeVarientPrice} color='default' />
                                    </>
                                );

                            })}
                        </div>
                    </div>
                    { addedToCart ? (
                        <div className={classes.section3}>
                            <Link to={{
                                pathname: `/Cart`,
                            }} color="primary" >Go to cart</Link>
                        </div>
                    ) : (
                            <div className={classes.section3}>
                                <Button color="primary" onClick={handleAddClick} >Add To Cart</Button>
                            </div>
                        )}
                </>
            ) : (
                    <>
                        <div className={classes.section1}>

                            <Grid item xs={12} sm={12}>
                                <Box width="100%">
                                    <Skeleton variant="rect" width="100%" height={118} />
                                </Box>
                                <Box pt={0.5}>
                                    <Skeleton />
                                    <Skeleton width="60%" />
                                </Box>
                            </Grid>
                        </div>
                        <Divider variant="middle" />
                        <div className={classes.section2}>
                            <Typography gutterBottom variant="body1">
                                Select type
                            </Typography>
                            <div>
                                <Chip className={classes.chip} label="Extra Soft" />
                                <Chip className={classes.chip} color="primary" label="Soft" />
                            </div>
                        </div>
                        <div className={classes.section3}>
                            <Button color="primary">Add to cart</Button>
                        </div>
                    </>
                )}
        </div>
    );
}



export default ProductPage  
