import React from "react";
import ava_min from'../../../../IMAGE/elon_mini (1).jpg'
function Post(props){
    return(
        <div className="post">
        <img src={ava_min}/>
        <span>Elon Musk</span>
        <p>{props.message}</p>
        </div>
    );
}
export default Post