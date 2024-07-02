import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const { state } = useLocation();
    const productData = state && state.productData;

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Detail</h2>
            <p>ID: {productData.id}</p>
            <p>Name: {productData.productName}</p>
            <p>Company: {productData.company}</p>
            <p>Category: {productData.category}</p>
            <p>Price: ${productData.price}</p>
            <p>Rating: {productData.rating}</p>
            <p>Discount: {productData.discount}%</p>
            <p>Availability: {productData.availability}</p>
        </div>
    );
};

export default ProductDetail;
