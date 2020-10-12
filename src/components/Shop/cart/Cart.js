import React from 'react'
import { withStyles } from '@material-ui/core';
import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import RemoveIcon from '@material-ui/icons/Remove';


const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

class CartPage extends React.Component {

    state = {
        items: []
    }
    handleDelete = (cartid) => {
        const sessionCookie = localStorage.getItem('sessionCookie');
        axios.defaults.headers.common = { Authorization: `${sessionCookie.toString()}` };
        axios.post(`/user/cart/delete/${cartid}`)
            .then((response) => {
                console.log(response.data.cartid)
                this.setState({ items: this.state.items.filter(item => item.data._id !== cartid) })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        const sessionCookie = localStorage.getItem('sessionCookie');
        axios.defaults.headers.common = { Authorization: `${sessionCookie.toString()}` };
        axios.get('/user/cart')
            .then((response) => {
                console.log(response.data)
                this.setState({ items: response.data.cart[0].cart })
            })
            .catch(err => console.log(err))
    }



    render() {
        const { classes } = this.props;
        console.log(this.state.items)
        return (

            <div>
                <h5>Cart Page</h5>
                <button  >Place Order</button>
                {this.state.items.length ? (
                    <>
                        {this.state.items.map(item => {
                            return (
                                <Grid item xs={12} md={6}>

                                    <div className={classes.demo}>
                                        <List >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar variant="rounded" src={item.data.data[0].productURL}>
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={item.data.productNameHindi}
                                                    secondary={`Varient: ${item.data.varientName}`}
                                                />
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" aria-label="delete" onClick={() => this.handleDelete(item.data._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="add" >
                                                        <AddIcon />
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete" >
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>


                            )
                        })}
                    </>
                ) : (
                        <>
                            <h5>Nothing in cart</h5>
                        </>
                    )}

            </div>
        )
    }

}

export default withStyles(styles)(CartPage) 