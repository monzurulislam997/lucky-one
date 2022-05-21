import React from 'react';

const Writings = () => {
    return (
        <div>
            <h2>How react works??</h2>
           <p>
It is a component-based and all data keeps in state. React first implements a virtual DOM .  we can say it  is  a DOM tree of JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation . Then the virtual DOM  try to find the  changes and update  and rerender the code.
React elements are objects and a creation is easy.React works with node js

               </p> 
               <h2>Difference between props and state</h2>
               <p>
 In React component, props are variables  which are passed to  other  component.Basically it pass the data.To get data in an different component we use props.One thing is important that we can send data using props only from parents component that’s called unidirectional.
 State on the other hand is still variables, initialized and managed by the component. We use state to store data.To avoid side effect issue we use useEffect.

</p>
        </div>
    );
};

export default Writings;