import React from 'react';
import { useState , useEffect} from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import Watch from '../Watch/Watch';
import './Watches.css'


const Watches = () => {

  const [watches,setWatches]=useState([]);
  const [singleWatch,setSingleWatch]=useState([])
    useEffect(()=>{
        fetch('watches.json')
        .then(res=>res.json())
        .then(data=>setWatches(data))
    },[]);

    const handleAddToCart =(watch)=>{
        const newWatch=[...singleWatch,watch]
        setSingleWatch(newWatch)
    }
    const chooseAgainHandle=()=>{
      
      setSingleWatch([])
     }

    return (
        <div className='shop-container'>
         <div className='cart-container'>
         { 
          watches.map(watch=><Watch
          key={watch.id}
            watch={watch}
            handleAddToCart={handleAddToCart}
          >
          </Watch>)
        } 
         </div>
        
        <div className='orderSummary-container'>
            
            <OrderDetails chooseAgainHandle={chooseAgainHandle} singleWatch={singleWatch}></OrderDetails>
        </div>
        </div>
    );
};

export default Watches;