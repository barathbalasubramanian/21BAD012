import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes
import ItemCard from '../../../components/ItemsCard';

const Items = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item, index) => (
                <ItemCard key={index} {...item} id={index} />
            ))}
        </div>
    );
}

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        productName: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        availability: PropTypes.string.isRequired,
    })).isRequired,
};

export default Items;
