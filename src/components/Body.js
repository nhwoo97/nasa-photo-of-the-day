import React from "react";
import App from '../App'

function Body({data}){
    return (
        <div>
            <p>
                {data.explanation}
            </p>
        </div>
    )
}

export default Body;