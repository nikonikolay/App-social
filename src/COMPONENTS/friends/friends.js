import React from "react";
import "./friends.css"

function Friends(props){
    return(
        <div className="friends">
        <button></button>
        <p>{props.name}</p>
        </div>
    );
}
export default Friends