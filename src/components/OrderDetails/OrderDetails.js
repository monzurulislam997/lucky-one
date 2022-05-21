import React from 'react';
import AllOrderDetails from '../AllOrderDetails/AllOrderDetails';

const OrderDetails = (props) => {
    
    const singleWatches=props.singleWatch;
    if(singleWatches.length>4){
       singleWatches.length=4;
       return alert("You can't add more than 4")
       
    }
    // const {name,price,img}=props.singleWatch;
    // singleWatches=

    
    return (
        <div>
            

                {
                    singleWatches.map(watch=><AllOrderDetails
                        watch={watch}
                        key={watch.id}
                    ></AllOrderDetails> 
                         )
                }

         <button>CHOOSE 1 FOR ME</button> <br />
         <button> CHOOSE AGAIN</button>

        </div>
    );
            };

export default OrderDetails;