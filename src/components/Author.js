import React from "react";
import App from '../App'


function Author({data}){
    return(
        <div>
            <p>
                Today's Image
            </p>
            <p>
                By {data.copyright}
            </p>
        </div>
    )
}

export default Author