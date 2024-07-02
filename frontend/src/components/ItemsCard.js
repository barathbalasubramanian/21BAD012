import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Rating, IconButton } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const ItemCard = ({ id, productName, company, category, price, rating, discount, availability }) => {
    const formattedRating = Math.round(parseFloat(rating));
    const navigate = useNavigate();

    const handleClick = () => {
        const productData = {
            id,
            productName,
            company,
            category,
            price,
            rating,
            discount,
            availability
        };

        navigate(`/product/${id}`, { state: { productData } });
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }} onClick={handleClick}>
            <CardContent>
                <Typography variant="h6">{productName}</Typography>
                <Typography variant="subtitle2">{company}</Typography>
                <Typography variant="body2">{category}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        ${price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Rating name="rating" value={formattedRating} precision={1} readOnly />
                        <IconButton aria-label="Discount">
                            <LocalOfferIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Typography variant="body2">Availability: {availability === 'out-of-stock' ? 'Out Of Stock' : 'In stock'}</Typography>
            </CardContent>
        </Card>
    );
};

ItemCard.propTypes = {
    id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    availability: PropTypes.string.isRequired,
};

export default ItemCard;
