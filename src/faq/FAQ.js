import React from 'react'
import { useState } from 'react'

const FAQ = ({ id, title, description }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='jumbotron btn-success p-3 mb-2'>
            <article>
                <h4>
                    {id}.{title}
                </h4>
                <button className='btn btn-warning ' onClick={() => setToggle(!toggle)} >
                    {toggle ? "hide" : "Answer"}
                </button>
                    {toggle && (<p>{description}</p>)}
            </article>
        </div>
    )
}

export default FAQ