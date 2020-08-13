import React from "react";
import App from '../App'

function Date(props){ 
    const {data, increase, decrease} = props
    return(
        <div>
            <h2>Good Day! The Date is: {data.date}</h2>
            <button onClick= {increase}>
                Next Day!
            </button>
            <button onClick= {decrease}>
                Previous Day!
            </button>
        </div>
    )
}

export default Date