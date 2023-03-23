import { CardGiftcard } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartIncrement } from '../store/cartSlice';

const ProductCard = ({ title, description, price, imageUrl }) => {


    const [images, setImages] = useState(imageUrl);
    const [nextImg, setNextImg] = useState(0)


    const dispatch = useDispatch()

    return (
        <Card sx={{ maxWidth: 345 }} onMouseEnter={() => {
            setNextImg(1)
        }}
            onMouseLeave={() => {
                setNextImg(0)
            }} >
            <CardMedia
                component="img"
                sx={{ objectFit: 'contain', maxWidth: '300px', width: '100%', borderRadius: '8px', margin: '8px auto' }}
                image={imageUrl[nextImg]}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
                    ${price}
                </Typography>
                <ButtonGroup fullWidth sx={{ gap: '18px', margin: '14px 0' }} >
                    <Button variant="contained" sx={{ bgcolor: 'black' }} >Buy Now</Button>
                    <Button variant="contained" sx={{ bgcolor: 'black' }} onClick={() => { dispatch(cartIncrement()) }}  >Add to cart</Button>
                </ButtonGroup>
            </CardContent>

        </Card >
    );
};

export default ProductCard;
