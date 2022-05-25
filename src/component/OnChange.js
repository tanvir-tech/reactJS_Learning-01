import React, { Component } from 'react'



class OnChange extends Component {


    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            changedValue: e.target.value
        },()=>{
            console.log(this.state.changedValue)
        })
    }



    render() {
        return (
            <div>
                <div class="d-flex justify-content-center">
                    <input type="text" onChange={this.onChangeHandler}></input>
                </div>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}

export default OnChange