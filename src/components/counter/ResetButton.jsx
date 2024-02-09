import './CounterButton.css';
import React ,{ useState } from 'react';

export default function ResetButton({resetMethod}){    
    return(
       
            <div>
            <button className="resetButton"
            onClick={resetMethod}>Reset</button>
            </div>
    )
}