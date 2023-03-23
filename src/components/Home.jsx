import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server } from '../App'
import Product from './Product'


// ?offset=0&limit=20 only 20 products

function Home() {


    const [data, setData] = useState([])
    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get(server + "categories/4/products").then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    useEffect(() => {
        axios.get(server + "categories").then((res) => {
            console.log(res.data)
            setCategory(res.data)
        })
    }, [])


    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', maxWidth: '1480px', margin: '0 auto', padding: '64px 16px', gap: '44px 10px' }}   >
            {
                data.map((item) => {
                    return <Product
                        title={item.title}
                        desc={item.description}
                        imageUrl={item.images}
                        category={item.category}
                        key={item.id}
                        price={item.price}
                    />
                })
            }
        </Box>
    )
}

export default Home