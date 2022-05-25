import React, { useState } from 'react'

function Form() {



    const [user,setUser] = useState({name:"", email:"", password:""});
    const {name, email, password} = user;

    // const handleNameChange=(e)=>{
    //     setUser({name:e.target.value, email, password});
    // }
    // const handleEmailChange=(e)=>{
    //     setUser({name, email:e.target.value, password});
    // }
    // const handlePassChange=(e)=>{
    //     setUser({name, email, password:e.target.value});
    // }

    // const handleChange=(e)=>{
    //     const filename = e.target.name;
    //     if(filename==="name"){
    //         setUser({name:e.target.value, email, password});
    //     }
    //     if(filename==="email"){
    //         setUser({name, email:e.target.value, password});
    //     }
    //     if(filename==="password"){
    //         setUser({name, email, password:e.target.value});
    //     }
    // }
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]: e.target.value});
    }
    


    const handleOnSubmit=(e)=>{
        console.log("submitted");
        console.log(name,email,password);
        e.preventDefault();
    }






  return (
    <div class="bg-success p-5">
        <h1>Registration Form</h1>
        <form action="" onSubmit={handleOnSubmit}>
            <div class="mb-2">
                <label htmlFor='name'>Name :</label>
                <input type="text" name="name" id="name" onChange={handleChange} required />
            </div>
            <div class="mb-2">
                <label htmlFor='email'>email :</label>
                <input type="email" name="email" id="email" onChange={handleChange} required />
            </div>
            <div class="mb-2">
                <label htmlFor='password'>Password :</label>
                <input type="password" name="password" id="password" onChange={handleChange} required />
            </div>
            <div class="mb-2">
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Form