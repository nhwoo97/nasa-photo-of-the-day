import React from "react";
import App from '../App'



function Image({data}){
    
    return (
        <div>
            <img src={data.url} alt='nasa photo of the day'/>
        </div>
    )
}

export default Image