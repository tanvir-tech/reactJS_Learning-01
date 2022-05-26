import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'


const DataFetch2 = () => {

    const loadinMessage = "Tasks are loading from server";

    const {datas,isLoading,error} = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            <p>{error && error}</p>
            <p>{isLoading && loadinMessage}</p>
            {datas && datas.map((todo) => {
                return <h5 key={todo.id}>{todo.title}</h5>
            })}
        </div>
    )
}

export default DataFetch2