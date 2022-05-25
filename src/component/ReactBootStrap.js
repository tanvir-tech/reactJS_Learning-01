import React from 'react'
// import Button from 'react-bootstrap/Button';

function ReactBootStrap() {
    return (
        <div>
            <div class="card shadow mb-2">
                <div class="card-header">
                    <h1>
                        Head
                    </h1>
                </div>

                <div class="card-body">
                    Body
                    <button className='btn btn-success'>OK</button>
                </div>
            </div>
        </div>
    )
}

export default ReactBootStrap