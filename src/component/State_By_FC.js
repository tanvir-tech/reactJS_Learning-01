import React, { useState } from 'react'

function State_By_FC() {

    const [count,setCount] = useState(0)

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }




    return (
        <div>
            <div class="bg-warning">
                <h1>
                    Count : {count}
                </h1>
                <button className='btn btn-success' onClick={handleIncrement}>+</button>
                <button className='btn btn-danger' onClick={handleDecrement} disabled={count === 0 ? true : false}>-</button>
            </div>
        </div>
    )
}

export default State_By_FC