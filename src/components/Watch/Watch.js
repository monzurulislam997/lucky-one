import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Watch.css'
const Watch = (props) => {
    const { handleAddToCart}=props;
    const {img,name,price}=props.watch;
    return (
        <div className='cart'>
          <img src={img} alt="" />
          
          <div className='cart-info'>
              <h3>{name}</h3>
              <p>Price: BDT {price}</p>
               
          </div>
          <button onClick={()=>{handleAddToCart(props.watch)}} className='btn'>
              <p>Start Order</p>
              <FontAwesomeIcon className='icon' icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Watch;