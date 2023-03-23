import { Shop, ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Button, ButtonGroup, Link, List, ListItem, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Header = () => {


    const logoStyles = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '40px',
        border: '2px solid black',
    }

    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        })

    }, [])


    const cartValue = useSelector((state) => { return state.cartSlice.value })
    const dispatch = useDispatch()

    return (
        <>
            <header>
                <AppBar position={fixed ? 'fixed' : 'static'} sx={{ bgcolor: 'black', boxShadow: 'none', }} >
                    <Toolbar sx={{ maxWidth: '1480px', margin: '0 auto', width: '100%', padding: '14px', justifyContent: 'space-between' }}  >
                        <Box color={'white'} >
                            <NavLink to='/' style={logoStyles}>S7hop</NavLink>
                        </Box>

                        <ButtonGroup>
                            <Button variant='initial' >Home</Button>
                            <Button variant='initial' >Products</Button>
                            <Button variant='initial' >About Us</Button>
                            <Button variant='initial' >Contact Us</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button variant='initial' > <Badge badgeContent={cartValue} color={'success'} > <ShoppingCart />  </Badge> </Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </header>
        </>
    )
}
