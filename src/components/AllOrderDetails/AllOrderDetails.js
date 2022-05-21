import React from 'react';
import './AllOrderDetails.css'
const AllOrderDetails = ({watch}) => {
    return (
        <div className='order-info'>
            <img src={watch.img} alt="" />
            <p>name:{watch.name}</p>
            
        </div>
    );
};

export default AllOrderDetails;