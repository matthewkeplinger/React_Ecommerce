import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import { mergeClasses } from '@material-ui/styles';
import logo from '../assets/commerce.png'
import useStyles from './navbarStyles.js'

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant= 'h6' className={classes.title} color='inherit'>
                        <img src = {logo} alt='Commerce.js' height = '25px' className = {classes.image}/>
                        Matt's Ecommerce
                    </Typography>
                    <div className = {classes.grow} />
                    <div classname = {classes.button}>
                        <IconButton aria-label = 'Show Cart Items' color='inherit'>
                            <Badge badgeContent = {2} color = 'secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
