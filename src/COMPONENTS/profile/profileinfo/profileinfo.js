import React from "react";
import ava from '../../../IMAGE/elon (1).jpg'
function ProfileInfo(props){
    return(
        <div className='me'>
        <img src={ava}/> 
        <p>Elon Mask</p>
    </div>
    );
}
export default ProfileInfo