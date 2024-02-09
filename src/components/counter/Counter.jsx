import './CounterButton.css';
import CounterButton from './CounterButton';
import React ,{ useState } from 'react';
import ResetButton from './ResetButton';


export default function Counter(){
    const [count,setCount] = useState(0);

    function incrementCounterParentFunction(by){
        setCount(count+by)    
    }
    function decrementCounterParentFunction(by){
        setCount(count-by)    
    }
    function resetMethod(){
        setCount(0);
    }
    return(
        <>
           
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <span className="totalCount">{count}</span>  
            <ResetButton resetMethod={resetMethod}/>
        </>
    )
}
