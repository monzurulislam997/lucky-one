import React from 'react';
import { useState } from 'react';
import AllOrderDetails from '../AllOrderDetails/AllOrderDetails';
import './OrderDetails.css'

const OrderDetails = (props) => {
    
    const singleWatches=props.singleWatch;
     const [choose,setChoose]=useState({})
    if(singleWatches.length>4){
       singleWatches.length=4;
       return alert("You can't add more than 4")
       
    }
    const chooseOneHandle=()=>{
        
        const min = 1;
        const max = 4;
        const intNumber = Math.floor(Math.random() * (max - min)) + min;
        console.log(intNumber)
         setChoose(singleWatches[intNumber])
     
        //   singleWatches.length=0;
        
    }
   
    
    return (
        <div>
                
                <div className='choose-watch'>
                        <img src={choose?.img} alt=""  />
                   <h2 style={{color:"green"}}>{choose?.name} </h2>
                   </div>
                

                {
                    singleWatches.map(watch=><AllOrderDetails
                        watch={watch}
                        key={watch.id}
                    ></AllOrderDetails> 
                         )
                }

         <button onClick={chooseOneHandle} className='choose-btn'>CHOOSE 1 FOR ME</button> <br />
         <button className='reset-btn'> CHOOSE AGAIN</button>

        </div>
    );
            };

export default OrderDetails;