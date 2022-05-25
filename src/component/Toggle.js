import React, { useState } from 'react'

function Toggle() {

    const [toggle, setToggle] = useState(true);
    console.log(toggle);

    return (
        <div>
            <div className='jumbotron bg-warning p-5'>
                <div>
                    <button className='btn btn-primary m-2 ' onClick={() => setToggle(!toggle)} >
                        {toggle ? "hide" : "show"}
                    </button>
                </div>
                {toggle && (
                    <p>
                        React makes it painless to create interactive UIs.
                        Design simple views for each state in your application,
                        and React will efficiently update and render just the right components when your data changes.
                    </p>
                )}
                <div>
                    <button className='btn btn-success m-2 ' onClick={() => setToggle(true)} >
                        Show
                    </button>
                    <button className='btn btn-danger m-2 ' onClick={() => setToggle(false)} >
                        Hide
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Toggle