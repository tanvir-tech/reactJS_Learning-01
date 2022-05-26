import React, { useEffect, useState } from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadinMessage = "Tasks are loading from server";

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if(!response.ok){
                    throw Error("Data fetching failed !");
                };
                return response.json();
            })
            .then(data => {
                setTodos(data);
                console.log(todos);
                setIsLoading(false);
            })
            .catch((error)=>{
                console.log(error.massage);
                setError(error.message);
                setIsLoading(false);
            })
        },1000)
    }, [todos])

    return (
        <div>
            <p>{error && error}</p>
            <p>{isLoading && loadinMessage}</p>
            {todos && todos.map((todo) => {
                return <h5 key={todo.id}>{todo.title}</h5>
            })}
        </div>
    )
}

export default DataFetch