import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleIncreament = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        console.log("use effect called..");
    },[count])

    return (
        <div>
            <h1>Count : {count}</h1>
            <button className='btn btn-danger' onClick={handleIncreament}>+</button>
            <button className='btn btn-warning' onClick={() => {setIsLoading(!isLoading);}}>Load</button>
        </div>
    )
}

export default UseEffect