import React, { useEffect, useState } from 'react'

const useFetch = (url) => {


    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        setTimeout(()=>{
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw Error("Data fetching failed !");
                };
                return response.json();
            })
            .then(data => {
                setDatas(data);
                console.log(datas);
                setIsLoading(false);
            })
            .catch((error)=>{
                // console.log(error.massage);
                setError(error.message);
                setIsLoading(false);
            })
        },1000)
    }, [url]);





  return {datas,isLoading,error};
}

export default useFetch